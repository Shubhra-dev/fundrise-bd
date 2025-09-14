import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import AppLayout from './ui/AppLayout';
import Venture from './pages/venture/Venture';
import PrivateCredit from './pages/private-credit/PrivateCredit';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/venture', element: <Venture /> },
      { path: '/private-credit', element: <PrivateCredit /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
