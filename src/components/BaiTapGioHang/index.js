/**
 *
 * các bước thực hiện:
 *
 * 1: dàn layout
 * 2: xđ dữ liệu thay đổi lưu vào state
 * 3: lấy data trong state di binding ra jsx
 * 4. render danh sách sp (xài map)
 * 5. xây dựng chức năng xem chi tiết
 * 6. .. thêm vào giỏ
 * 7. ..tăng giảm số lượng
 * 8. ..xóa sp khỏi giỏ hàng
 * 9. ..cập nhật tổng tiền khi thay đổi số lượng sp
 *
 */

import React, { Component } from "react";
import DanhSachSPc from "./data.json";
import Model from "./Model";
import SanPham from "./SanPham";

export default class BaiTapGioHang extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [],
  };

  

  handleCardList = (sanPham) => {
    //tìm vị trí
    const index = this.state.cardList.findIndex((card, i) => {
      return card.maSP === sanPham.maSP;
    });

    let cardList = [...this.state.cardList];

    if (index !== -1) {
      //tìm thấy
      //tăng số lượng
      cardList[index].soLuong += 1;
    } else {
      //ko tìm thấy thì thêm vào mảng
      //copy thuộc tính SP rồi thêm số lượng
      const newCard = { ...sanPham, soLuong: 1 };
      cardList = [...cardList, newCard];
    }

    this.setState({
      cardList,
    });
  };

  //   state ở đâu xét state ở đo, nhớ tên setstate phải trùng tên biến trong state
  handleSanPhamChiTiet = (sanPhamChiTiet) => {
    this.setState({
      // sanPhamChiTiet : sanPhamChiTiet,
      sanPhamChiTiet, //es6
    });
  };

  renderDanhSachSp = () => {
    return DanhSachSPc.map((sp, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <SanPham
            product={sp}
            xuLyChiTiet={this.handleSanPhamChiTiet}
            handleCardList={this.handleCardList}
          />
        </div>
      );
    });
  };

  xoaMatHang = (maSP) => {
    //xử lý xóa
    // console.log('maSP', maSP)

    let gioHangUpdate = [...this.state.cardList]
    const indexSP = gioHangUpdate.findIndex(
      (spGH) => spGH.maSP === maSP
      )
    if(indexSP !== -1)
    {
      gioHangUpdate.splice(indexSP,1)
    } 

    //xét lại state giỏ hàng
    this.setState({
      cardList:gioHangUpdate
    })

  }

  tangGiamSoLuong = (maSP, tangGiam) => {
    //tìm ra sp bấm nút + hoặc -
    console.log('maSP', maSP)
    console.log('tangGiam', tangGiam)

    //set lại state giò hàng
    let gioHangUpdate = [...this.state.cardList]

    //tìm SP trong giỏ hàng
    let spGH = gioHangUpdate.find(sp => sp.maSP === maSP)
    if(spGH){
      if(tangGiam){
        spGH.soLuong += 1
      }else{
        if(spGH.soLuong > 1){
          spGH.soLuong -= 1
        }
        
      }
    }
    //xét lại state giỏ hàng
    this.setState({
      cardList:gioHangUpdate
    })
  }

  tongSoLuong = () => {
    let tongSoLuong = this.state.cardList.reduce((soLuong,spGH,index) => {
      return soLuong += spGH.soLuong
    },0)
    return tongSoLuong
  }

  tongTien = () => {
    let tongTien = this.state.cardList.reduce((tongSoTien,spGH,index) => {
      return tongSoTien += spGH.soLuong * spGH.giaBan
    },0)
    return tongTien
  }
 
  render() {
    return (
      <div>
        <section className="container">
          <h3 className="title text-center">Bài tập giỏ hàng</h3>
          <div className="container text-center my-2">
            <button
              className="btn btn-danger "
              data-toggle="modal"
              data-target="#modelId"
            >
              Giỏ hàng ( {this.tongSoLuong()} - {this.tongTien().toLocaleString()} )
            </button>
          </div>
          <div className="container danh-sach-san-pham">
            <div className="row">{this.renderDanhSachSp()}</div>
          </div>

          <Model cardList={this.state.cardList} 
          xoamathang={this.xoaMatHang}
          tangGiamSoLuong={this.tangGiamSoLuong}/>

          <div className="row">
            <div className="col-sm-5">
              <img
                className="img-fluid"
                src={this.state.sanPhamChiTiet.hinhAnh}
                
              />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.state.sanPhamChiTiet.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.state.sanPhamChiTiet.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.state.sanPhamChiTiet.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
