import React from 'react';
import LoginForm from '../components/login-form';
import userStore from '../stores/user';

export default function() {
  return (
    <div className="Home">
      <LoginForm store={userStore} />
    </div>
  );
}
