import { useMemo, useState } from 'react';
import { HiEye, HiEyeOff, HiCheck } from 'react-icons/hi';
import RoundedButton from '@/components/buttons/RoundedButton';
import SubHeading from '@/components/text/SubHeading';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';

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

export default function PasswordSetup({ userData, onPrev, onSuccess }) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const results = useMemo(() => {
    const res = {};
    rulesList.forEach((r) => (res[r.id] = r.test(password)));
    return res;
  }, [password]);

  const allValid = Object.values(results).every(Boolean);
  const passwordsMatch = password.length > 0 && password === confirm;

  const handleNext = async () => {
    if (!allValid) return alert('Please satisfy all password rules');
    if (!passwordsMatch) return alert('Passwords do not match');
    setSubmitting(true);
    // simulate save
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    onSuccess && onSuccess(password);
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
          Create a password
        </SubHeading>

        <CaptionExtraSmall textColor={`text-paragraph`}>
          Use a strong password to keep your account secure. The password must satisfy the rules
          below.
        </CaptionExtraSmall>

        <div className="space-y-2 mt-4">
          <div className="relative">
            <input
              type={showPwd ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Password"
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
              focused || password ? 'opacity-100' : 'opacity-0 max-h-0 overflow-hidden'
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
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Confirm password"
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
            {confirm.length > 0 && (
              <div
                className={`text-xs text-center ${passwordsMatch ? 'text-success' : 'text-red-500'}`}
              >
                {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <RoundedButton
              type="button"
              label={'Prev'}
              bg="bg-bg-cool-irish-base"
              onClick={onPrev}
            />
            <RoundedButton
              type="button"
              label={submitting ? 'Processing...' : 'Next'}
              bg="bg-bg-dusky-plum-base"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
