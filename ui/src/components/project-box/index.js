import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import AddTodoForm from '../add-todo-form';

class ProjectBox extends React.Component {

  renderTodoTasks(todos) {
    return (
      <div>
        <Card.Title>To Do</Card.Title>
        {todos.length > 0 ? (
            <ListGroup variant="flush">
              {todos.map((todo, index) => (
                <ListGroup.Item key={index}>{todo.name}</ListGroup.Item>
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
        <Card.Header>{name}</Card.Header>

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
