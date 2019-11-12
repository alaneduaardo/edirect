import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { withRouter } from 'react-router-dom';

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.store.logout().then(() => {
      this.props.history.push('/');
    })
  }

  render() {
    return (
      <div className="MainNav">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">EDirect</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown title="Username" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={this.handleClick}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MainNav);
