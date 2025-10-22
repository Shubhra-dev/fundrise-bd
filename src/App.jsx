import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import AppLayout from './ui/AppLayout';
import Venture from './pages/venture/Venture';
import PrivateCredit from './pages/private-credit/PrivateCredit';
import RealEstate from './pages/real-estate/RealEstate';
import ClientReturn from './pages/client-return/ClientReturn';
import HelpCenter from './pages/help-center/HelpCenter';
import WhyFundrise from './pages/why-fundrise/WhyFundrise';
import HowItWorks from './pages/how-it-works/HowItWorks';
import AboutUs from './pages/about-us/AboutUs';
import ProductDetails from './pages/product-details/ProductDetails';
import LettersToInvestor from './pages/letters-investor/LettersToInvestor';
import LetterToInvestorDetails from './pages/letter-to-investor-details/LetterToInvestorDetails';
import UserDashboard from './pages/user-dashboard/UserdashBoard';
import UserPortfolio from './pages/user-portfolio/UserPortfolio';
import UserInvests from './pages/user-invests/UserInvests';
import UserTransaction from './pages/user-transactions/UserTransaction';
import UserNewsFeed from '@/pages/user-newsfeed/UserNewsFeed';
import Calculator from '@/pages/user-calculator/Calculator';
import BrowseInvests from '@/pages/user-browse-invests/BrowseInvests';
import InvestmentDetails from '@/pages/user-invests-details/InvestmentDetails';
import ProtectedRoute from '@/ProtectedRoute';
import Login from '@/pages/login/Login';
import Registration from '@/pages/registration/Registration';
import ForgotPassword from '@/pages/forgot-pasword/ForgotPassword';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/venture', element: <Venture /> },
      { path: '/private-credit', element: <PrivateCredit /> },
      { path: '/real-estate', element: <RealEstate /> },
      { path: '/client-return', element: <ClientReturn /> },
      { path: '/help-center', element: <HelpCenter /> },
      { path: '/why-fundrise', element: <WhyFundrise /> },
      { path: '/how-it-works', element: <HowItWorks /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/product/details/:prod_id', element: <ProductDetails /> },
      { path: '/letters-to-investor', element: <LettersToInvestor /> },
      { path: '/letters-to-investor/details/:letter_id', element: <LetterToInvestorDetails /> },
    ],
  },
  { path: '/auth/login', element: <Login /> },
  { path: '/auth/register', element: <Registration /> },
  { path: '/auth/forgot-password', element: <ForgotPassword /> },
  {
    element: (
      <ProtectedRoute>
        <UserDashboard />
      </ProtectedRoute>
    ),
    path: '/user/dashboard',
  },
  {
    element: (
      <ProtectedRoute>
        <UserPortfolio />
      </ProtectedRoute>
    ),
    path: '/user/portfolio',
  },
  {
    element: (
      <ProtectedRoute>
        <UserInvests />
      </ProtectedRoute>
    ),
    path: '/user/invests',
  },
  {
    element: (
      <ProtectedRoute>
        <UserTransaction />
      </ProtectedRoute>
    ),
    path: '/user/transactions',
  },
  {
    element: (
      <ProtectedRoute>
        <UserNewsFeed />
      </ProtectedRoute>
    ),
    path: '/user/newsfeed',
  },
  {
    element: (
      <ProtectedRoute>
        <Calculator />
      </ProtectedRoute>
    ),
    path: '/user/calculator',
  },
  {
    element: (
      <ProtectedRoute>
        <BrowseInvests />
      </ProtectedRoute>
    ),
    path: '/user/browse-invests',
  },
  {
    element: (
      <ProtectedRoute>
        <InvestmentDetails />
      </ProtectedRoute>
    ),
    path: '/user/browse-invests/details/:invest_id',
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
