import React from 'react';
import ToggleButton from '../../chakra/components/toggle-button';

const AuthButton = ({ isAuthenticated = false }) => {
  return (
    <ToggleButton
      actions={[() => console.log('Logging Out'), () => console.log('Logging In')]}
      condition={isAuthenticated}
      labels={['Logout', 'Login']}
    />
  );
};

export default AuthButton;
