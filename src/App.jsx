import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import AppLayout from './ui/AppLayout';
import Venture from './pages/venture/Venture';
import PrivateCredit from './pages/private-credit/PrivateCredit';
import RealEstate from './pages/real-estate/RealEstate';
import ClientReturn from './pages/client-return/ClientReturn';
import HelpCenter from './pages/help-center/HelpCenter';
import WhyFundrise from './pages/why-fundrise/WhyFundrise';
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
