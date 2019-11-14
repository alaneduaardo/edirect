import React from "react";
import PropTypes from 'prop-types';
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { inject, observer } from "mobx-react";

class DeleteProject extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    let { deleteProjectId } = this.props.modalStore;

    this.props.projectStore.delete(deleteProjectId).then(() => {
      this.props.modalStore.toggleDeleteProject();
    });
  }

  handleClose() {
    this.props.modalStore.toggleDeleteProject();
  }

  render() {
    let { deleteProject } = this.props.modalStore;

    return (
      <Modal show={deleteProject} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Removing Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure do want delete this project?</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={this.handleClick}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

DeleteProject.propTypes = {
  projectId: PropTypes.string.isRequired
}

export default inject("projectStore", "modalStore")(
  observer(DeleteProject)
);
