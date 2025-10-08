import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll behavior
    });
  }, [location]);

  return (
    <div className="font-workSans dark:bg-backgroundPrimaryDark">
      <Toaster position="top-right" reverseOrder={false} />
      {/* <Header /> */}
      <div className="max-w-content bg-black w-full">
        <div className="sm:h-[65px] px-5 sm:px-8 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto text-xs sm:text-base font-sora font-semibold text-white flex items-center gap-4 flex-wrap">
          <p onClick={() => navigate('/')} className="hover:underline cursor-pointer">
            Home
          </p>
          <p onClick={() => navigate('/private-credit')} className="hover:underline cursor-pointer">
            Private Credit
          </p>
          <p onClick={() => navigate('/real-estate')} className="hover:underline cursor-pointer">
            Real Estate
          </p>
          <p onClick={() => navigate('/venture')} className="hover:underline cursor-pointer">
            Venture Capital
          </p>
          <p onClick={() => navigate('/client-return')} className="hover:underline cursor-pointer">
            Client Return
          </p>
          <p onClick={() => navigate('/help-center')} className="hover:underline cursor-pointer">
            Help Center
          </p>
          <p onClick={() => navigate('/why-fundrise')} className="hover:underline cursor-pointer">
            Why Fundrise
          </p>
          <p onClick={() => navigate('/how-it-works')} className="hover:underline cursor-pointer">
            How It Works
          </p>
        </div>
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div className="h-52 bg-bg-dusky-plum-base w-full"></div>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
