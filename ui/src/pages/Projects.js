import React from 'react';
import MainNav from '../components/mainnav';
import userStore from '../stores/user';

export default function() {
  return (
    <div className="Projects">
      <MainNav store={userStore}/>
    </div>
  );
}
