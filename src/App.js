import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import ReactDOM from "react-dom";
import { slide as Menu } from "react-burger-menu";

function RouterComponet() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" exact strict component={Home} />
        <Route exact path="/about" exact strict component={Contact} />
        <Route exact path="/contact" exact strict component={Contact} />
      </Switch>
    </Router>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(path) {
    this.props.history.push(path);
    RouterComponet();
  }
  render() {
    return (
      <Menu>
        <a
          id="home"
          className="menu-item"
          href="/"
          onClick={() => {
            this.onClick("/");
          }}
        >
          Home
        </a>
        <a
          id="about"
          className="menu-item"
          href="/about"
          onClick={() => {
            this.onClick("/");
          }}
        >
          About
        </a>
        <a
          id="contact"
          className="menu-item"
          href="/contact"
          onClick={() => {
            this.onClick("/contact");
          }}
        >
          Contact
        </a>
      </Menu>
    );
  }
}

export default App;
