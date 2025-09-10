import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import AppLayout from './ui/AppLayout';
import Venture from './pages/venture/Venture';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/venture', element: <Venture /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
