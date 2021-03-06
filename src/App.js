import React, { Component } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { loginAPI } from "./callApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      response: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.response = this.response.bind(this);
    this.login = this.login.bind(this);
  }

  login(response) {
    loginAPI("login/", response);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  response() {
    var response = {};
    response["username"] = this.state.username;
    response["password"] = this.state.password;
    response["platform"] = "website";
    this.login(response);
  }

  render() {
    return (
      <Form className="login">
        <FormGroup>
          <Label> Username </Label>
          <Input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label> Password </Label>
          <Input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block" onClick={this.response}>
          Login
        </Button>
      </Form>
    );
  }
}

export default App;
