import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./components/home";
import contactUs from "./components/contactUs";
import problem from "./components/problem";
import login from "./components/login";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" exact strict component={home} />
      <Route exact path="/contactUs" exact strict component={contactUs} />
      <Route exact path="/problem" exact strict component={problem} />
      <Route exact path="/login" exact strict component={login} />
    </Switch>
  </Router>
);

export default routing;
