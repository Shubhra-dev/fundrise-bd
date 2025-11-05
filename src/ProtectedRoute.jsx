import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// Accept children so ProtectedRoute can be used either as a route element wrapper
// (e.g. <ProtectedRoute><Page/></ProtectedRoute>) or as a parent route with nested
// children (in which case <Outlet/> is used).
export default function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector((s) => s.auth.isLoggedIn);
  const loc = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace state={{ from: loc }} />;
  }
  // If children are provided (wrapped usage) render them, otherwise render Outlet
  return children ? children : <Outlet />;
}
