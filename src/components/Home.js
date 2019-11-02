import React, { Component } from "react";
import "./css/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(path) {
    this.props.history.push(path);
  }
  render() {
    return <h1>Akhil</h1>;
  }
}

export default Home;
