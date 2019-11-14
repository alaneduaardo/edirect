import React from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { inject, observer } from "mobx-react";
import "./login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      errorMsg: ""
    }
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
    let { username, password } = this.state;

    this.props.userStore.login(username, password).then((response) => {
      this.props.history.push('/projects');
    })
    .catch((err) => {
      this.setState({
        username: "",
        password: "",
        errorMsg: err.response.data.error.message
      })
    })
  }

  render() {
    return (
      <div className="Login-Form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">

            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })} />
            <Form.Text className="text-muted">
              Please fill your credentials to signin
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })} />
          </Form.Group>

          <Form.Control.Feedback type="invalid">
            {this.state.errorMsg}
          </Form.Control.Feedback>

          <Button block bssize="large" variant="secondary" disabled={!this.validateForm()} type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
};
export default inject("userStore")(
  observer(
    withRouter(LoginForm)
  )
);
