import React, { Component } from "react";
import { S } from "spectacle";

export default class Tachable extends Component {
  constructor() {
    super();
    this.state = {
      todoTachado: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      todoTachado: true
    });
  }
  render() {
    const children = React.Children.map(
      this.props.children,
      (child, index) => {
        if (child.type === S) {
          return React.cloneElement(child, {
            onclick: this.handleClick,
            type: this.state.todoTachado ? child.props.type + ' strikethrough' : child.props.type
          });
        } else {
          return child;
        }
      }
    );
  
    return <div>{children}</div>;
  }
}
