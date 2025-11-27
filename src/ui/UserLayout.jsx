import { Outlet } from 'react-router-dom';
import FloatingSelectionTray from '@/components/cart/FloatingSelectionTray';

function UserLayout() {
  return (
    <div className="font-workSans dark:bg-backgroundPrimaryDark">
      <div className="min-h-screen">
        <Outlet />
      </div>
      <FloatingSelectionTray />
    </div>
  );
}

export default UserLayout;
