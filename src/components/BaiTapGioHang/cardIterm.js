import React, { Component } from "react";

export default class CardIterm extends Component {
  render() {

    // lấy ra các thuộc tính card,tangGiamSoLuong,xoamathang trong this.props
    let{card,tangGiamSoLuong,xoamathang} = this.props

    return (
      <tr className="card-item">
        <td>1</td>
        <td>{card.tenSP}</td>
        <td>
          <img src={card.hinhAnh} width={50} alt />
        </td>
        <td>
          <button onClick={() => {tangGiamSoLuong(card.maSP, false)}}>-</button>
          {card.soLuong}
          <button onClick={() => {tangGiamSoLuong(card.maSP, true)}}>+</button>
        </td>
    <td>{card.giaBan}</td>
    <td>{(card.giaBan * card.soLuong).toLocaleString()}</td>
        <td>
          <button className="btn btn-danger" 
          onClick={() =>{
            xoamathang(card.maSP)
          }}>Delete</button>
        </td>
      </tr>
    );
  }
}
