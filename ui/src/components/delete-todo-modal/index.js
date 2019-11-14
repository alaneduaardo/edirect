import React from "react";
import PropTypes from 'prop-types';
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { inject, observer } from "mobx-react";

class DeleteTodo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    let { deleteProjectId, deleteTodoId } = this.props.modalStore;

    this.props.projectStore.deleteTodo(deleteProjectId, deleteTodoId).then(() => {
      this.props.modalStore.toggleDeleteTodo();
    });
  }

  handleClose() {
    this.props.modalStore.toggleDeleteTodo();
  }

  render() {
    let { deleteTodo } = this.props.modalStore;

    return (
      <Modal show={deleteTodo} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Removing Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure do want delete this todo?</Modal.Body>
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

export default inject("projectStore", "modalStore")(
  observer(DeleteTodo)
);
