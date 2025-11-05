import { useMemo, useState } from 'react';
import { HiEye, HiEyeOff, HiCheck } from 'react-icons/hi';
import RoundedButton from '@/components/buttons/RoundedButton';
import SubHeading from '@/components/text/SubHeading';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import { passwordReset, registrationRequest } from '@/services/authenticationAPIs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '@/features/authentication/authSlice';

const rulesList = [
  {
    id: 'length',
    label: '8-16 characters',
    test: (s) => s.length >= 8 && s.length <= 16,
  },
  {
    id: 'nowhitespace',
    label: 'No whitespace',
    test: (s) => !/\s/.test(s),
  },
  {
    id: 'numeric',
    label: '1 numeric value',
    test: (s) => /[0-9]/.test(s),
  },
  {
    id: 'uppercase',
    label: '1 uppercase letter',
    test: (s) => /[A-Z]/.test(s),
  },
  {
    id: 'lowercase',
    label: '1 lowercase letter',
    test: (s) => /[a-z]/.test(s),
  },
  {
    id: 'special',
    label: '1 special character',
    test: (s) => /[^A-Za-z0-9]/.test(s),
  },
];

export default function PasswordSetup({ userData, setUserdata, onPrev, type }) {
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState({ state: false, message: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const results = useMemo(() => {
    const res = {};
    rulesList.forEach((r) => (res[r.id] = r.test(userData.password)));
    return res;
  }, [userData.password]);

  const allValid = Object.values(results).every(Boolean);
  const passwordsMatch =
    userData.password.length > 0 && userData.password === userData.password_confirmation;

  const handleNext = async (e) => {
    e.preventDefault();
    if (!allValid) return setError({ state: true, message: 'Please satisfy all password rules' });
    setSubmitting(true);
    setError({ state: false, message: '' });
    try {
      const response = await registrationRequest(userData);
      console.log(response);
      // If backend returns auth token, dispatch logIn to update global auth state
      const token = response?.result?.token;
      const name =
        `${response?.result?.investor?.first_name} ${response?.result?.investor?.last_name}` || '';
      const profileImage = response?.result?.investor?.profile_image || '';

      if (token) {
        dispatch(logIn({ token, name, profileImage }));
      }
      // Navigate to home page after successful registration
      navigate('/', { replace: true });
    } catch (error) {
      setError({
        state: true,
        message: error.message || 'Email verification failed. Please try again.',
      });
      setTimeout(() => {
        setError({ state: false, message: '' });
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };
  const handleResetPasswordFp = async (e) => {
    e.preventDefault();
    if (!allValid) return setError({ state: true, message: 'Please satisfy all password rules' });
    setSubmitting(true);
    setError({ state: false, message: '' });
    try {
      const response = await passwordReset(userData);
      navigate('/auth/login');
    } catch (error) {
      setError({
        state: true,
        message: error.message || 'Email verification failed. Please try again.',
      });
      setTimeout(() => {
        setError({ state: false, message: '' });
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full px-6 sm:px-10 py-6">
      <div className="max-w-md w-full mx-auto">
        <SubHeading
          textColor={`text-btext-1-dark`}
          extraClass={`mb-2`}
          fontWeight={`font-semibold`}
          align={`text-left`}
          font={`font-display`}
        >
          {(type = 'fp' ? 'Reset your password' : 'Create a password')}
        </SubHeading>

        <CaptionExtraSmall textColor={`text-paragraph`}>
          Use a strong password to keep your account secure. The password must satisfy the rules
          below.
        </CaptionExtraSmall>

        <form
          onSubmit={type === 'fp' ? handleResetPasswordFp : handleNext}
          className="space-y-2 mt-4"
        >
          <div className="relative">
            <input
              type={showPwd ? 'text' : 'password'}
              value={userData.password}
              onChange={(e) => setUserdata({ ...userData, password: e.target.value })}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Password"
              required
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPwd((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              aria-label={showPwd ? 'Hide password' : 'Show password'}
            >
              {showPwd ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
            </button>
          </div>

          {/* Rules checklist - visible when focused or when some rules are satisfied */}
          <div
            className={`grid grid-cols-2 gap-2 p-2 rounded-md bg-bg-primary-2 transition-all ${
              focused || userData.password ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'
            }`}
          >
            {rulesList.map((r) => (
              <div key={r.id} className="flex items-center gap-2 text-sm">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    results[r.id]
                      ? 'bg-btext-1-base text-white'
                      : 'bg-white border border-gray-200 text-disable'
                  }`}
                >
                  {results[r.id] ? <HiCheck className="w-3 h-3" /> : <span className="w-3 h-3" />}
                </div>
                <div className={`text-xs ${results[r.id] ? 'text-sub-heading' : 'text-caption'}`}>
                  {r.label}
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              value={userData.password_confirmation}
              onChange={(e) => setUserdata({ ...userData, password_confirmation: e.target.value })}
              placeholder="Confirm password"
              required
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              aria-label={showConfirm ? 'Hide password' : 'Show password'}
            >
              {showConfirm ? <HiEyeOff className="w-5 h-5" /> : <HiEye className="w-5 h-5" />}
            </button>
          </div>

          <div className="">
            {userData.password_confirmation.length > 0 && (
              <div
                className={`text-xs text-center ${passwordsMatch ? 'text-success' : 'text-red-500'}`}
              >
                {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
              </div>
            )}
          </div>
          {error.state && (
            <div className="mt-3 bg-red-200 py-2 px-3 rounded-md border-l-4 border-l-red-500">
              <CaptionExtraSmall textColor={`text-red-700`} align={`text-center`}>
                {error.message}
              </CaptionExtraSmall>
            </div>
          )}

          <div className="mt-4 grid grid-cols-2 gap-3">
            <RoundedButton
              type="button"
              label={'Prev'}
              bg="bg-bg-cool-irish-base"
              onClick={onPrev}
            />
            <RoundedButton
              type="submit"
              label={submitting ? 'Processing...' : 'Next'}
              bg="bg-bg-dusky-plum-base"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
