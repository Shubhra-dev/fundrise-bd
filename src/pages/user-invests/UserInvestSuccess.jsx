import RoundedButton from '@/components/buttons/RoundedButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserInvestSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <h1 className="text-2xl font-bold text-green-600">Success!</h1>
      <p className="mt-2 text-gray-700">Your investment has been successfully processed.</p>

      <div className="flex gap-4 mt-6">
        <RoundedButton onClick={() => navigate('/user/portfolio')}>
          Return to Portfolio
        </RoundedButton>
        <RoundedButton onClick={() => navigate('/user/dashboard')}>
          Return to Dashboard
        </RoundedButton>
      </div>
    </div>
  );
}

export default UserInvestSuccess;
