import UserInvestStepOne from '@/pages/user-invests/UserInvestStepOne';
import DashboardLayout from '../user-dashboard/DashboardLayout';
import { useState } from 'react';
import UserInvestStepTwo from '@/pages/user-invests/UserInvestStepTwo';

function UserInvests() {
  const [amount, setAmount] = useState('');
  const [currentPage, setCurrentPage] = useState(2);
  return (
    <DashboardLayout activeTab={3}>
      {currentPage === 1 && (
        <UserInvestStepOne amount={amount} setAmount={setAmount} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 2 && <UserInvestStepTwo setCurrentPage={setCurrentPage} />}
    </DashboardLayout>
  );
}

export default UserInvests;
