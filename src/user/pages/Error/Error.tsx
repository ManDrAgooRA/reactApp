import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const Error: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate('/')}>
        Go back
      </button>
      <span>Page not found</span>
    </div>
  );
};
