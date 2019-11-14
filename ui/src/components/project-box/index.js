import React from "react";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import EditProject from '../edit-project';
import DeleteProject from '../delete-project';
import DeleteTodo from '../delete-todo';
import CheckTodo from '../check-todo';
import AddTodoForm from '../add-todo-form';

class ProjectBox extends React.Component {

  renderTodoTasks(todos) {
    let projectId = this.props.id;

    return (
      <div>
        <Card.Title>To Do</Card.Title>
        {todos.length > 0 ? (
            <ListGroup variant="flush">
              {todos.map((todo, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col sm={8}>
                      {todo.name}
                    </Col>
                    <Col>
                      <CheckTodo projectId={projectId} todoId={todo._id} />
                      <DeleteTodo projectId={projectId} todoId={todo._id} />
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
        )
        : (<small>{'Hooray! All the tasks are clear.'}</small>)}
      </div>
    );
  }

  renderDoneTasks(done) {
    return (
      <div>
        <Card.Title>Done</Card.Title>
        {done.length > 0 ? (
          <ListGroup variant="flush">
            {done.map((completed, index) => (
              <ListGroup.Item key={index}>{completed.name}</ListGroup.Item>
            ))}
          </ListGroup>
        )
        : (<small>{'Still does not have tasks closed yet, let\'go man!'}</small>)}
      </div>
    );
  }

  render() {
    let { id, name, todos, done } = this.props;
    let todoList, doneList, emptyText;

    if(todos.length === 0 && done.length === 0) {
      emptyText = 'The project is clear. Let\'s get started with some tasks :)';
    } else {
      todoList = this.renderTodoTasks(todos);
      doneList = this.renderDoneTasks(done);
    }

    return (
      <Card sm={3}>
        <Card.Header>
          <Row>
            <Col sm={8}>
              {name}
            </Col>
            <Col>
              <EditProject id={id} />
              <DeleteProject id={id} />
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          {todoList}
          {doneList}
          {emptyText}
        </Card.Body>

        <Card.Footer className="text-muted">
          <AddTodoForm projectId={id} />
        </Card.Footer>
      </Card>
    );
  }
}

export default ProjectBox
