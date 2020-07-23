import React, { Component } from "react";
import { Card } from "reactstrap";
import FaIcon from "../Icon/Faicon";

class Greeting extends Component {
  render(props) {
    return (
      <Card>
        <h1>Thank you for your submit :)</h1>
        <FaIcon icon="fas trash"></FaIcon>
      </Card>
    );
  }
}

export default Greeting;
