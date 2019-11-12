import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import stores from '../../stores';

export default () => (
  <Provider {...stores}>
    <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
        </div>
    </Router>
  </Provider>
);
