import UserInvestStepOne from '@/pages/user-invests/UserInvestStepOne';
import DashboardLayout from '../user-dashboard/DashboardLayout';
import { useState } from 'react';
import UserInvestStepTwo from '@/pages/user-invests/UserInvestStepTwo';
import UserInvestStepThree from '@/pages/user-invests/UserInvestStepThree';

function UserInvests() {
  const [amount, setAmount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProjects, setSelectedProjects] = useState([]);
  return (
    <DashboardLayout activeTab={3}>
      {currentPage === 1 && (
        <UserInvestStepOne amount={amount} setAmount={setAmount} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 2 && (
        <UserInvestStepTwo
          setCurrentPage={setCurrentPage}
          onContinue={(projects) => {
            setSelectedProjects(projects);
            setCurrentPage(3);
          }}
        />
      )}
      {currentPage === 3 && (
        <UserInvestStepThree
          amount={Number(amount)}
          selectedProjects={selectedProjects}
          onPrev={() => setCurrentPage(2)}
          onSubmit={() => alert('Invest flow simulated')}
        />
      )}
    </DashboardLayout>
  );
}

export default UserInvests;
