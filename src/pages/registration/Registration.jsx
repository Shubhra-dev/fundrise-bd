import { useState, forwardRef } from 'react';
import LoginImage from '@assets/Login.png';
import Logo from '@assets/Logo.svg';
import OtpVerification from './OtpVerification';
import PasswordSetup from './PasswordSetup';
import { useLocation, useNavigate } from 'react-router-dom';
import RegistrationForm from '@/pages/registration/RegistrationForm';

export default function Registration() {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    date_of_birth: '',
    password: '',
    password_confirmation: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

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
                  <RegistrationForm
                    userData={userData}
                    setUserData={setUserData}
                    setCurrentPage={setCurrentPage}
                  />
                )}
                {currentPage === 2 && (
                  <OtpVerification
                    email={userData.email}
                    onPrev={() => setCurrentPage(1)}
                    setCurrentPage={setCurrentPage}
                  />
                )}
                {currentPage === 3 && (
                  <PasswordSetup
                    userData={userData}
                    onPrev={() => setCurrentPage(1)}
                    setUserdata={setUserData}
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
