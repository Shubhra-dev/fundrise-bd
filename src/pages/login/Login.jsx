import { useState } from 'react';
import LoginImage from '@assets/Login.png';
import Logo from '@assets/Logo.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import SubHeading from '@/components/text/SubHeading';
import { useDispatch } from 'react-redux';
import { logIn } from '@/features/authentication/authSlice';
import { EyeIcon, EyeOff } from 'lucide-react';
import { loginRequest } from '@/services/authenticationAPIs';
import CaptionExtraSmall from '@/components/text/CaptionExtraSmall';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ state: false, message: '' });
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
  const [see, setSee] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({ state: false, message: '' });
    try {
      const response = await loginRequest({ email, password });
      // Expected response to include an auth token and user meta
      // adapt to actual response shape from API
      const token = response?.result?.token;
      const name =
        `${response?.result?.investor?.first_name} ${response?.result?.investor?.last_name}` || '';
      const profileImage = response?.result?.investor?.profile_image || '';

      if (token) {
        dispatch(logIn({ token, name, profileImage }));
        navigate(from, { replace: true });
        return;
      }
    } catch (error) {
      console.error(error);
      setError({ state: true, message: error.message || 'Login failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-dvh w-full bg-white">
      {/* subtle gradient border around the canvas */}

      <div className="max-w-screen-content mx-auto bg-bg-dusky-plum-base">
        {/* Shell */}
        <div
          className={`px-5 min-h-dvh flex items-center py-4 sm:py-0 sm:px-8 smLap:px-0 smLap:w-10/12 laptop:w-9/12 mx-auto`}
        >
          <div className="flex items-stretch justify-normal rounded-2xl w-full">
            {/* LEFT ILLUSTRATION */}
            <div className="hidden sm:flex flex-col items-center justify-center w-[40%] tab:w-1/2 bg-white rounded-2xl shadow-2xl">
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
                <div className="w-full h-[400px]">
                  <img
                    src={LoginImage}
                    alt="Login Illustration"
                    className="h-full w-full object-fill"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white w-full sm:w-[60%] tab:w-1/2 rounded-2xl shadow-2xl">
              <div
                className="w-full flex sm:hidden items-center justify-center mt-4 gap-3 cursor-pointer"
                onClick={() => navigate('/')}
              >
                <div className="w-10 h-10 flex items-center justify-center text-btext-1-base">
                  <img src={Logo} alt="company logo" />
                </div>
                <div className="text-xl sm:text-2xl font-display font-semibold">Start Up</div>
              </div>
              <div className="w-full px-6 sm:px-10 py-5">
                <SubHeading
                  textColor={`text-btext-1-dark`}
                  extraClass={`mt-2 mb-4`}
                  fontWeight={`font-semibold`}
                  align={`text-center`}
                >
                  Welcome
                </SubHeading>

                <form className="space-y-6" onSubmit={onSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-btext-border-btext-1-base/30 focus:border-btext-1-base/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={see ? 'text' : 'password'}
                        required
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-btext-1-base/30 focus:border-btext-1-base/60"
                      />
                      {!see && (
                        <EyeIcon
                          className="absolute text-disable hover:text-sub-title right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                          onClick={() => setSee(!see)}
                        />
                      )}
                      {see && (
                        <EyeOff
                          className="absolute text-disable hover:text-sub-title right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                          onClick={() => setSee(!see)}
                        />
                      )}
                    </div>
                  </div>
                  {error.state && (
                    <div className="mt-3 bg-red-200 py-2 px-3 rounded-md border-l-4 border-l-red-500">
                      <CaptionExtraSmall textColor={`text-red-700`} align={`text-center`}>
                        {error.message}
                      </CaptionExtraSmall>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md py-3 text-white text-sm font-medium shadow-sm transition active:scale-[.99] disabled:opacity-60 bg-bg-dusky-plum-base hover:brightness-110"
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>

                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => navigate('/auth/forgot-password')}
                      className="text-xs text-gray-400 hover:text-gray-500"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </form>
                <div className="px-6 sm:px-10 py-6 flex flex-col items-center gap-2">
                  <p className="text-sub-heading text-sm">Dont have account?</p>
                  <button
                    type="button"
                    className="rounded-md border border-gray-200 px-5 py-2.5 text-sm font-medium text-btext-1-dark hover:border-btext-1-dark/40 transition"
                    onClick={() => navigate('/auth/register')}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT FORM */}
        </div>
      </div>
    </div>
  );
}
