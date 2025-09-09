import { Outlet, useLocation } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

function AppLayout() {
  const location = useLocation();

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
      <div className="h-[65px] bg-black w-full"></div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div className="h-52 bg-bg-dusky-plum-base w-full"></div>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
