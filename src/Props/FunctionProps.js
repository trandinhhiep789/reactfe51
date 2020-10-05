import React from "react";

export default function FunctionProps(props) {
  console.log(props);
  const { hovaten, tenlop } = props;
  return (
    <div>
      <h3>FunctionProps</h3>
      {/* cách 1 */}
      {/* <p>Tên: {props.hovaten}</p>
      <p>Lớp: {props.tenlop}</p> */}

      {/* cách 2: */}
      <p>Tên: {hovaten}</p>
      <p>Lớp: {tenlop}</p>
    </div>
  );
}
