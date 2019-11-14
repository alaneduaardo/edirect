import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { inject, observer } from "mobx-react";

class DeleteProject extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    let { id } = this.props;

    this.props.projectStore.delete(id);
  }

  render() {
    return (
      <FontAwesomeIcon icon={faTrashAlt} onClick={this.handleClick} />
    )
  }
}

DeleteProject.propTypes = {
  projectId: PropTypes.string.isRequired
}

export default inject("projectStore")(
  observer(DeleteProject)
);
