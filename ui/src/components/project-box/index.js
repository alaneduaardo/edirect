import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { inject, observer } from "mobx-react";

export default (props) => (
  <Card>
    <Card.Header>{props.name}</Card.Header>
    
    <Card.Body>
      <Card.Title>To Do</Card.Title>
      <ListGroup variant="flush">
        {props.todos.map((todo) => (
          <ListGroup.Item>{todo.name}</ListGroup.Item>
        ))}
      </ListGroup>

      <Card.Title>Done</Card.Title>
      <ListGroup variant="flush">
        {props.done.map((completed) => (
          <ListGroup.Item>{completed.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card.Body>

    <Card.Footer className="text-muted">
      test
    </Card.Footer>
  </Card>
);
