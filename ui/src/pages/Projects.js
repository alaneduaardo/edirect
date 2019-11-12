import React from 'react';
import MainNav from '../components/mainnav';
import userStore from '../stores/user';
import { inject, observer } from "mobx-react";

class ProjectsPage extends React.Component {
  componentWillMount() {
    let { loggedUser } = this.props.userStore;

    if(loggedUser == null || loggedUser.id == null) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="Projects">
        <MainNav store={userStore}/>
      </div>
    );
  }
}

export default inject("userStore")(
  observer(ProjectsPage)
);
