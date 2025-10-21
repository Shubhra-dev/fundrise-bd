import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function ProtectedRoute() {
  const isLoggedIn = useSelector((s) => s.auth.isLoggedIn);
  const loc = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace state={{ from: loc }} />;
  }
  return <Outlet />;
}
