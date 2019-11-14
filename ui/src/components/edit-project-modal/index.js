import React from "react";
import PropTypes from 'prop-types';
import { Modal, Button, Form } from "react-bootstrap";
import { inject, observer } from "mobx-react";

class EditProject extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);



    this.state = {
      name: ''
    }
  }

  componentDidUpdate() {
    let { projectId } = this.props.modalStore;

    if(this.state.name === '') {      
      this.props.projectStore.findOne(projectId).then((data) => {
        this.setState({
          name: data ? data.name : ''
        });
      });
    }
  }

  validateForm() {
    return this.state.name.length > 0;
  }

  handleClick() {
    let { projectId, todoId } = this.props.modalStore;
    let { name } = this.state;

    this.props.projectStore.update(projectId, { name }).then(() => {
      this.props.modalStore.toggleEditProject();
    });
  }

  handleClose() {
    this.props.modalStore.toggleEditProject();
  }

  render() {
    let { editProject } = this.props.modalStore;

    return (
      <Modal show={editProject} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Updating Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="projectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={this.handleClick}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default inject("projectStore", "modalStore")(
  observer(EditProject)
);
