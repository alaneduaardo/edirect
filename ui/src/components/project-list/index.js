import React from "react";
import ProjectBox from "../project-box";
import { CardDeck } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { inject, observer } from "mobx-react";

export default (props) => (
  <div className="ProjectList">
    <CardDeck>
      {props.list.map((project) => (
        <ProjectBox name={project.name}
          todos={project.todos.filter(todo => !todo.done)}
          done={project.todos.filter(todo => todo.done)} />
      ))}
    </CardDeck>
  </div>
);
