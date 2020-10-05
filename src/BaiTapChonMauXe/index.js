//các bước thực hiện

// 1. Dàn LayOut
// 2. xét data thay đổi và lưu vào trong state
// 3. lấy data trong State đi binding ra jsx
// 4. bắt sự kiện chọn nút màu
// 5. cập nhật lại giá trị trong state

import React, { Component } from "react";
import BaiTapLayOut1 from "../components/BaiTapLayoutComponent/BaiTapLayOut1";

export default class BaiTapChonMauXe extends Component {
  state = {
    imgCar: "./img/car/products/red-car.jpg",
  };

  chonMauXe = (mauxe) => {
    // alert(mauxe);
    this.setState({
      imgCar: mauxe,
      // Căn Phương ví dụ cái kia là imgCar chứ ko phải mauxe
      // thì chỉ cần ghi imgcar thôi chứ ko ghi imgcar : imgcar
    });
  };

  render() {
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button
              className="btn"
              onClick={() => {
                this.chonMauXe("./img/car/products/black-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-black.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                this.chonMauXe("./img/car/products/red-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                this.chonMauXe("./img/car/products/silver-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button
              className="btn"
              onClick={() => {
                this.chonMauXe("./img/car/products/steel-car.jpg");
              }}
            >
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <div className="car mt-2">
            <img className="img-thumbnail" src={this.state.imgCar} alt="hinh" />
          </div>
        </div>
      </section>
    );
  }
}
