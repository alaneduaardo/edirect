import React from "react";
import PropTypes from 'prop-types';
import { Form, Button, Jumbotron } from "react-bootstrap";
import { inject, observer } from "mobx-react";

class AddProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: ""
    }
  }

  validateForm() {
    return this.state.name.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();

    let { id } = this.props.userStore.loggedUser;
    let { name } = this.state;

    console.log({ name, user: id });

    this.props.projectStore.new({ name, user: id }).then(() => {
      this.setState({ name: "" });
    });
  }

  render() {
    return (
      <Jumbotron>
        <h3>Start a new project!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="projectName">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fill an awesome name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })} />
          </Form.Group>

          <Button block bssize="large" variant="success" disabled={!this.validateForm()} type="submit">
            Submit
          </Button>
        </Form>
      </Jumbotron>
    )
  }
}

export default inject("userStore", "projectStore")(
  observer(AddProjectForm)
);
