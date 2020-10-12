import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class Props extends Component {
  //props công dụng: truyền dữ liệu từ các component (cha sang con)

  state = {
    ten: "ELTR13",
    lop: 13,
  };

  render() {
    return (
      <div>
        <h2>Props</h2>

        <FunctionProps
          //cách truyền pros trong reactjs
          hovaten={this.state.ten}
          tenlop={this.state.lop}
        />

        <ClassProps
          //cách truyền pros trong reactjs
          hovaten={this.state.ten}
          tenlop={this.state.lop}
        />
      </div>
    );
  }
}
