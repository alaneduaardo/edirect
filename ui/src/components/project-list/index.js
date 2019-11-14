import React from "react";
import ProjectBox from "../project-box";
import { CardColumns } from "react-bootstrap";

export default (props) => (
  <div className="ProjectList">
    <CardColumns>
      {
        props.list.map((project, index) => (
          <ProjectBox
            key={index}
            id={project._id}
            name={project.name}
            todos={project.todos.filter(todo => !todo.done)}
            done={project.todos.filter(todo => todo.done)} />
        ))
      }
    </CardColumns>
  </div>
);
