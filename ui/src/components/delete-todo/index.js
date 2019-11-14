import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { inject, observer } from "mobx-react";

class DeleteTodo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  validateForm() {
    return this.state.todo.length > 0;
  }

  handleClick(event) {
    event.preventDefault();

    let { projectId, todoId } = this.props;

    this.props.projectStore.deleteTodo(projectId, todoId);
  }

  render() {
    return (
      <FontAwesomeIcon icon={faTrashAlt} onClick={this.handleClick} />
    )
  }
}

DeleteTodo.propTypes = {
  projectId: PropTypes.string.isRequired,
  todoId: PropTypes.string.isRequired
}

export default inject("projectStore")(
  observer(DeleteTodo)
);
