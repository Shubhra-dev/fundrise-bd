import { useState } from 'react';
import LoginImage from '@assets/Login.png';
import Logo from '@assets/Logo.svg';
import SubHeading from '@/components/text/SubHeading';
import RoundedButton from '@/components/buttons/RoundedButton';
import OtpVerification from '../registration/OtpVerification';
import PasswordSetup from '../registration/PasswordSetup';
import { useNavigate } from 'react-router-dom';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';
import { emailVerifyForgotPassword, passwordReset } from '@/services/authenticationAPIs';

export default function ForgotPassword() {
  const [step, setStep] = useState(1); // 1: enter email, 2: otp+password
  const [userData, setUserData] = useState({ email: '', password: '', password_confirmation: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ state: false, message: '' });
  const navigate = useNavigate();

  const submitEmail = async (e) => {
    e.preventDefault();
    if (!userData.email) return alert('Please enter your email');
    setLoading(true);
    setError({ state: false, message: '' });
    try {
      const response = await emailVerifyForgotPassword(userData.email);
      console.log(response);
      setStep(2);
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
    <div className="min-h-dvh w-full bg-white">
      <div className="max-w-screen-content mx-auto bg-bg-dusky-plum-base">
        <div className="px-5 min-h-dvh flex items-center sm:px-8 smLap:px-0 smLap:w-10/12 laptop:w-9/12 mx-auto">
          <div className="flex items-stretch justify-normal rounded-2xl w-full flex-col md:flex-row">
            {/* LEFT ILLUSTRATION */}
            <div className="flex flex-col items-center justify-center md:w-1/2 bg-white rounded-2xl shadow-2xl">
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
                    alt="Forgot Password Illustration"
                    className="h-full w-full object-fill"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white md:w-1/2 rounded-2xl shadow-2xl flex items-center mt-6 md:mt-0">
              {step === 1 && (
                <div className="w-full px-6 sm:px-10 py-5">
                  <SubHeading
                    textColor={`text-btext-1-dark`}
                    extraClass={`mt-2 mb-8`}
                    fontWeight={`font-semibold`}
                    align={`text-center`}
                    font={`font-display`}
                  >
                    Forgot password
                  </SubHeading>

                  <form onSubmit={submitEmail} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>
                    {error.state && (
                      <div className="mt-3 bg-red-200 py-2 px-3 rounded-md border-l-4 border-l-red-500">
                        <CaptionExtraSmall textColor={`text-red-700`} align={`text-center`}>
                          {error.message}
                        </CaptionExtraSmall>
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-3">
                      <RoundedButton
                        type="button"
                        label={'Cancel'}
                        bg={'bg-bg-cool-irish-base'}
                        onClick={() => navigate('/auth/login')}
                      />
                      <RoundedButton
                        type="submit"
                        label={loading ? 'Sending...' : 'Send code'}
                        bg={'bg-bg-dusky-plum-base'}
                      />
                    </div>
                  </form>
                </div>
              )}

              <div className="w-full px-6 sm:px-10 py-5">
                {step === 2 && (
                  <OtpVerification
                    email={userData.e}
                    onPrev={() => setStep(1)}
                    setCurrentPage={setStep}
                    type={`fp`}
                  />
                )}
                {step === 3 && (
                  <PasswordSetup
                    userData={userData}
                    setUserdata={setUserData}
                    onPrev={() => setStep(2)}
                    type={'fp'}
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
