import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./css/problem.css";

import { slide as Menu } from "react-burger-menu";

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
      <div className="hamburger">
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
      </div>
    );
  }
}

class problem extends Component {
  constructor(props) {
    super(props);
    this.state = { problem: "" };

    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onClick(path) {
    this.props.history.push(path);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <hamburger />
        <div className="problem">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Problem:</Label>
              <Input
                type="text"
                placeholder="problem"
                name="problem"
                value={this.state.problem}
                onChange={this.handleChange}
              />
              <Button
                className="btn-lg btn-dark btn-block"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default problem;
