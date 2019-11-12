import React from 'react';
import LoginForm from '../components/login-form';
import stores from '../stores';

export default function() {
  return (
    <div className="Home">
      <LoginForm store={stores.userStore} />
    </div>
  );
}
