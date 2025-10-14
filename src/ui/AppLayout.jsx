import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';

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
      <Header />
      <div className="min-h-screen">
        {/* Added pt-16 to account for header height */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
