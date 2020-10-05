import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    console.log(this.props); // để coi cái mình truyền vô tên gì, vd: hovaten, tenlop
    return (
      <div>
        <h3>ClassProps</h3>
        <p>Tên: {this.props.hovaten}</p>
        <p>Lớp: {this.props.tenlop}</p>
      </div>
    );
  }
}
