import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./css/hamburger.css";

class hamburger extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(path) {
    this.props.history.push(path);
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
          id="problem"
          className="menu-item"
          href="/problem"
          onClick={() => {
            this.onClick("/problem");
          }}
        >
          Problem
        </a>
        <a
          id="contact"
          className="menu-item"
          href="/contact"
          onClick={() => {
            this.onClick("/contactUs");
          }}
        >
          Contact
        </a>
        <a
          id="login"
          className="menu-item"
          href="/login"
          onClick={() => {
            this.onClick("/login");
          }}
        >
          Login
        </a>
      </Menu>
    );
  }
}

export default hamburger;
