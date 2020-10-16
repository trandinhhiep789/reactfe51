import React, { Component } from 'react'
import DanhSachSPc from "../components/BaiTapGioHang/data.json";
import GioHangRedux from './GioHangRedux';
import SanPhamRedux from './SanPhamRedux';

export default class BaiTapGioHangRedux extends Component {

    renderSanPham = () => {
        return DanhSachSPc.map((sp, i) => {
            return <div className="col-4" key={i}>
                <SanPhamRedux sanPham={sp} />
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài Tập Giỏ Hàng REDUX</h3>
                <div>
                    <div className="text-right">Gio hàng(0)</div>
                    <GioHangRedux />
                </div>
                <div className="row">
                    {this.renderSanPham()}
                </div>


            </div>
        )
    }
}
