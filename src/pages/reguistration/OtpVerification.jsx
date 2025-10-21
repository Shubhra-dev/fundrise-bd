import { useEffect, useRef, useState } from 'react';
import MobileOtpSvg from '@assets/MobileOtp.png';
import SubHeading from '@/components/text/SubHeading';
import RoundedButton from '@/components/buttons/RoundedButton';

export default function OtpVerification({ email, onPrev, onSuccess }) {
  const [values, setValues] = useState(['', '', '', '', '', '']);
  const inputsRef = useRef([]);
  const [resendTimer, setResendTimer] = useState(60);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (resendTimer === 0) return;
    const t = setInterval(() => setResendTimer((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [resendTimer]);

  const onChange = (idx, e) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
    if (!val && e.nativeEvent && e.nativeEvent.inputType === 'deleteContentBackward') {
      // handle deletion
    }
    const next = [...values];
    next[idx] = val;
    setValues(next);
    if (val && idx < 5) inputsRef.current[idx + 1]?.focus();
    // if all filled, call verification (simulate)
  };

  const onKeyDown = (idx, e) => {
    if (e.key === 'Backspace' && !values[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && idx > 0) inputsRef.current[idx - 1]?.focus();
    if (e.key === 'ArrowRight' && idx < 5) inputsRef.current[idx + 1]?.focus();
  };

  const onPaste = (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    const digits = paste.replace(/\D/g, '').slice(0, 6).split('');
    if (digits.length === 0) return;
    const next = [...values];
    for (let i = 0; i < 6; i++) next[i] = digits[i] || '';
    setValues(next);
    const firstEmpty = next.findIndex((v) => v === '');
    inputsRef.current[firstEmpty === -1 ? 5 : firstEmpty]?.focus();
  };

  const handleResend = async () => {
    if (resendTimer > 0) return;
    setSending(true);
    // simulate API
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setResendTimer(60);
  };

  const handleNext = () => {
    const code = values.join('');
    if (code.length < 6) return alert('Please enter full 6 digit code');
    // simulate verify
    setSending(true);
    setTimeout(() => {
      setSending(false);
      onSuccess && onSuccess(code);
    }, 800);
  };

  return (
    <div className="w-full px-6 sm:px-10 py-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-btext-1-light/30 rounded-xl flex items-center justify-center">
          <img src={MobileOtpSvg} alt="otp" className="w-14 h-14" />
        </div>

        <SubHeading
          textColor={`text-btext-1-dark`}
          extraClass={`mt-4 mb-2`}
          fontWeight={`font-semibold`}
          align={`text-center`}
          font={`font-display`}
        >
          Enter Verification Code
        </SubHeading>

        <p className="text-center text-sm text-paragraph max-w-xs">
          We sent a 6-digit code to your email <span className="font-medium">{email}</span>. Enter
          the code below to continue.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3" onPaste={onPaste}>
          {values.map((v, i) => (
            <input
              key={i}
              ref={(el) => (inputsRef.current[i] = el)}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              className="w-10 sm:w-12 h-12 sm:h-14 text-center rounded-lg border border-gray-200 bg-white text-lg sm:text-xl font-medium focus:outline-none focus:ring-2 focus:ring-btext-1-base/40"
              value={v}
              onChange={(e) => onChange(i, e)}
              onKeyDown={(e) => onKeyDown(i, e)}
            />
          ))}
        </div>

        <div className="mt-3 text-sm text-center text-caption">
          Didn’t receive the code?{' '}
          <button
            onClick={handleResend}
            className={`ml-1 font-medium ${resendTimer === 0 ? 'text-btext-1-base' : 'text-disable'}`}
            disabled={resendTimer !== 0}
          >
            {resendTimer === 0 ? 'Resend code' : `Resend in ${resendTimer}s`}
          </button>
        </div>

        <div className="mt-6 w-full grid grid-cols-2 gap-3">
          <RoundedButton
            type="button"
            onClick={onPrev}
            label={'Previous'}
            bg="bg-bg-cool-irish-base"
          />
          <RoundedButton
            type="button"
            onClick={handleNext}
            label={sending ? 'Processing...' : 'Next'}
            bg="bg-bg-dusky-plum-base"
          />
        </div>
      </div>
    </div>
  );
}
