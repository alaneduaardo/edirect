import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';

export default () => (
  <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
      </div>
  </Router>
);
