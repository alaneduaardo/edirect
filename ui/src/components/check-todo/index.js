import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { inject, observer } from "mobx-react";

class CheckTodo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      icon: faSquare
    }
  }

  handleClick(event) {
    event.preventDefault();

    let { projectId, todoId } = this.props;

    this.props.projectStore.checkTodo(projectId, todoId);
  }

  render() {
    return (
      <FontAwesomeIcon
        icon={this.state.icon}
        onClick={this.handleClick}
        onMouseEnter={() => this.setState({ icon: faCheckSquare })}
        onMouseLeave={() => this.setState({ icon: faSquare })}
        style={{ marginRight: '5px' }} />
    )
  }
}

CheckTodo.propTypes = {
  projectId: PropTypes.string.isRequired,
  todoId: PropTypes.string.isRequired
}

export default inject("projectStore")(
  observer(CheckTodo)
);
