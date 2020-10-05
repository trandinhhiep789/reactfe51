import React, { Component } from "react";

export default class DemoListAndKey extends Component {
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];

  renderDanhSachKhoaHoc = () => {
    //map trả về cái mảng foreach ko trả về gì hết, map các cty hay xài

    // cách 1
    // const content = this.danhSachKhoaHoc.map((khoahoc, index) => {
    //   return <li>{khoahoc}</li>;
    // });
    // return content;

    // cách 2
    return this.danhSachKhoaHoc.map((khoahoc, index) => {
      return <li>{khoahoc}</li>;
    });
  };

  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh Sách Khóa Học</h3>
        {/* <ul>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>VueJS</li>
        </ul> */}
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
