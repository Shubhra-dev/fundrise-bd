import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LoginImage from '@assets/Login.png';
import Logo from '@assets/Logo.svg';
import OtpVerification from './OtpVerification';
import PasswordSetup from './PasswordSetup';
import { useLocation, useNavigate } from 'react-router-dom';
import SubHeading from '@/components/text/SubHeading';
import RoundedButton from '@/components/buttons/RoundedButton';

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

export default function Registration() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    // basic validation - ensure email and dob provided
    if (!userData.dob) {
      alert('Please select your birth date');
      return;
    }

    setLoading(true);
    // simulate API: send OTP to email
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    // proceed to OTP page
    setCurrentPage(2);
  };

  return (
    <div className="min-h-dvh w-full bg-white">
      <div className="max-w-screen-content mx-auto bg-bg-dusky-plum-base py-2 sm:py-0">
        <div className="px-5 min-h-dvh flex items-center sm:px-8 smLap:px-0 smLap:w-10/12 laptop:w-9/12 mx-auto">
          <div className="flex items-stretch justify-normal rounded-2xl w-full flex-col md:flex-row">
            {/* LEFT ILLUSTRATION */}
            <div className="sm:flex flex-col items-center justify-center hidden  w-[40%] tab:w-1/2 bg-white rounded-2xl shadow-2xl">
              <div>
                <div
                  className="w-full flex items-center justify-center my-5 gap-3 cursor-pointer"
                  onClick={() => navigate('/')}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-btext-1-base">
                    <img src={Logo} alt="company logo" />
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-semibold">Start Up</div>
                </div>
                <div className="w-full h-[300px] sm:h-[400px]">
                  <img
                    src={LoginImage}
                    alt="Login Illustration"
                    className="h-full w-full object-fill"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white w-full sm:w-[60%] tab:w-1/2 rounded-2xl shadow-2xl flex items-center justify-center mt-6 md:mt-0">
              <div className="w-full">
                <div
                  className="w-full sm:hidden flex items-center justify-center mt-5 gap-3 cursor-pointer"
                  onClick={() => navigate('/')}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-btext-1-base">
                    <img src={Logo} alt="company logo" />
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-semibold">Start Up</div>
                </div>
                {currentPage === 1 && (
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
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            First Name
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            required
                            placeholder="John"
                            value={userData.firstName}
                            onChange={(e) =>
                              setUserData({ ...userData, firstName: e.target.value })
                            }
                            className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-btext-border-btext-1-base/30 focus:border-btext-1-base/60"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            required
                            placeholder="Doe"
                            value={userData.lastName}
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                            className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-btext-border-btext-1-base/30 focus:border-btext-1-base/60"
                          />
                        </div>
                      </div>

                      <div className="w-full flex flex-col gap-4">
                        {/* DOB with calendar */}
                        <div className="w-full">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date of Birth
                          </label>
                          <DatePicker
                            selected={userData.dob ? new Date(userData.dob) : null}
                            onChange={(d) => {
                              setUserData({ ...userData, dob: d });
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
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
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

                      <RoundedButton
                        type="submit"
                        label={loading ? 'Processing...' : 'Next'}
                        bg="bg-bg-dusky-plum-base"
                      />
                    </form>
                  </div>
                )}
                {currentPage === 2 && (
                  <OtpVerification
                    email={userData.email}
                    onPrev={() => setCurrentPage(1)}
                    onSuccess={(code) => {
                      // TODO: verify code with API
                      // advance to password setup
                      setCurrentPage(3);
                    }}
                  />
                )}
                {currentPage === 3 && (
                  <PasswordSetup
                    userData={userData}
                    onPrev={() => setCurrentPage(2)}
                    onSuccess={(pwd) => {
                      // final submit - create account
                      alert('Account created');
                      navigate(from, { replace: true });
                    }}
                  />
                )}
              </div>
            </div>
            {/* END RIGHT FORM */}
          </div>
        </div>
      </div>
    </div>
  );
}
