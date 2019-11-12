import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { withRouter } from 'react-router-dom';
import { inject, observer } from "mobx-react";

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.userStore.logout().then(() => {
      this.props.history.push('/');
    })
  }

  render() {
    return (
      <div className="MainNav">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/projects">EDirect</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title={this.props.userStore.loggedUser.name} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={this.handleClick}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default inject("userStore")(
  observer(
    withRouter(MainNav)
  )
);
