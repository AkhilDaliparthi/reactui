import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./components/home";
import contactUs from "./components/contactUs";
import login from "./components/login";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" exact strict component={home} />
      <Route exact path="/contact" exact strict component={contactUs} />
      <Route exact path="/login" exact strict component={login} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
