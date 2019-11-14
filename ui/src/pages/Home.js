import React from 'react';
import LoginForm from '../components/login-form';
import { inject, observer } from "mobx-react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    let { loggedUser } = this.props.userStore;

    if(loggedUser != null && loggedUser.id != null) {
      this.props.history.push('/projects');
    }
  }

  render() {
    return (
      <div className="Home">
        <LoginForm />
      </div>
    );
  }
}

export default inject("userStore")(
  observer(HomePage)
);
