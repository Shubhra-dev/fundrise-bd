import RoundedButton from '@/components/buttons/RoundedButton';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import SubHeading from '@/components/text/SubHeading';
import { emailVerify, emailVerifyForgotPassword } from '@/services/authenticationAPIs';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function toISO(date) {
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function fmtDDMMYYYY(date) {
  if (!date) return '';
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function RegistrationForm({ userData, setUserData, setCurrentPage }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ state: false, message: '' });
  const onSubmit = async (e) => {
    e.preventDefault();
    // basic validation - ensure email and dob provided
    if (!userData.date_of_birth) {
      alert('Please select your birth date');
      return;
    }
    setLoading(true);
    setError({ state: false, message: '' });
    try {
      const response = await emailVerifyForgotPassword(userData.email);
      console.log(response);
      setCurrentPage(2);
    } catch (error) {
      setError({
        state: true,
        message: error.message || 'Email verification failed. Please try again.',
      });
      setTimeout(() => {
        setError({ state: false, message: '' });
      }, 3000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full px-6 sm:px-10 py-5">
      <SubHeading
        textColor={`text-btext-1-dark`}
        extraClass={`mt-2 mb-8`}
        fontWeight={`font-semibold`}
        align={`text-center`}
        font={`font-display`}
      >
        Register Here
      </SubHeading>

      <form className="space-y-6" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              required
              placeholder="John"
              value={userData.first_name}
              onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-btext-border-btext-1-base/30 focus:border-btext-1-base/60"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              required
              placeholder="Doe"
              value={userData.last_name}
              onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-btext-border-btext-1-base/30 focus:border-btext-1-base/60"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          {/* DOB with calendar */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
            <DatePicker
              selected={userData.date_of_birth ? new Date(userData.date_of_birth) : null}
              onChange={(d) => {
                setUserData({ ...userData, date_of_birth: d });
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              maxDate={new Date()}
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-btext-border-btext-1-base/30 focus:border-btext-1-base/60"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="example@gmail.com"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-btext-border-btext-1-base/30 focus:border-btext-1-base/60"
            />
          </div>
        </div>
        {error.state && (
          <div className="mt-3 bg-red-200 py-2 px-3 rounded-md border-l-4 border-l-red-500">
            <CaptionExtraSmall textColor={`text-red-700`} align={`text-center`}>
              {error.message}
            </CaptionExtraSmall>
          </div>
        )}
        <RoundedButton
          type="submit"
          label={loading ? 'Processing...' : 'Next'}
          bg="bg-bg-dusky-plum-base"
        />
      </form>
    </div>
  );
}

export default RegistrationForm;
