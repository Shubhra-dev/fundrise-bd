import RoundedButton from '@/components/buttons/RoundedButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserInvestSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <h1 className="text-2xl font-bold text-green-600">Investment Successful!</h1>
      <p className="mt-2 text-gray-700 text-base font-semibold">
        Your investment has been successfully processed.
      </p>

      <div className="flex gap-4 mt-6">
        <RoundedButton label="Return to Portfolio" onClick={() => navigate('/user/portfolio')} />
        <RoundedButton label="Return to Dashboard" onClick={() => navigate('/user/dashboard')} />
      </div>
    </div>
  );
}

export default UserInvestSuccess;
