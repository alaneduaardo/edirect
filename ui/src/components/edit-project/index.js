import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { inject, observer } from "mobx-react";

class EditProject extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    let { id } = this.props;

    this.props.modalStore.toggleEditProject(id);
  }

  render() {
    return (
      <FontAwesomeIcon icon={faEdit} onClick={this.handleClick} />
    )
  }
}

EditProject.propTypes = {
  id: PropTypes.string.isRequired
}

export default inject("modalStore")(
  observer(EditProject)
);
