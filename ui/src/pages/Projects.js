import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import MainNav from '../components/main-nav';
import ProjectList from '../components/project-list';
import AddProjectForm from '../components/add-project-form';
import DeleteProjectModal from '../components/delete-project-modal';
import DeleteTodoModal from '../components/delete-todo-modal';
import { inject, observer } from "mobx-react";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    let { loggedUser } = props.userStore;

    if(loggedUser === null) {
      props.history.push('/');
    }

    this.props.projectStore.list();
  }

  render() {
    let { loggedUser } = this.props.userStore;
    let { projects } = this.props.projectStore;

    if(loggedUser === null) {
      return null;
    }

    return (
      <div className="Projects">
        <MainNav />
        <Container style={{ padding: '20px' }}>
          <Row>
            <Col sm={9}>
              <ProjectList list={projects}/>
            </Col>
            <Col sm={3}>
              <AddProjectForm />
            </Col>
          </Row>
        </Container>
        <DeleteProjectModal />
        <DeleteTodoModal />
      </div>
    );
  }
}

export default inject("userStore", "projectStore")(
  observer(ProjectsPage)
);
