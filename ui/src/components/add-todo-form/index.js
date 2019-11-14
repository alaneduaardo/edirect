import React from "react";
import PropTypes from 'prop-types';
import { Form, Button, Row, Col } from "react-bootstrap";
import { inject, observer } from "mobx-react";

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      todo: ""
    }
  }

  validateForm() {
    return this.state.todo.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();

    let { projectId } = this.props;
    let { todo } = this.state;

    this.props.projectStore.addTodo(projectId, { name: todo }).then(() => {
      this.setState({ todo: "" });
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="projectName">
          <Form.Control
            type="text"
            value={this.state.todo}
            onChange={e => this.setState({ todo: e.target.value })}
            placeholder="New task" />
        </Form.Group>
        <Button block bssize="large" variant="secondary" disabled={!this.validateForm()} type="submit">
          Add Todo
        </Button>
      </Form>
    )
  }
}

AddTodoForm.propTypes = {
  projectId: PropTypes.string.isRequired
}

export default inject("projectStore")(
  observer(AddTodoForm)
);
