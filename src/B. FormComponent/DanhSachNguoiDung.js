import React, { Component } from 'react'
import FromComponent from './FromComponent'
import { connect } from 'react-redux'
import { suaNguoiDungAction, xoaNguoiDungAction } from '../redux/actions/QuanLyNguoiDungAction'
import NewFormComponent from './NewFormComponent'

class DanhSachNguoiDung extends Component {
    renderNguoiDung = () => {
        return this.props.mangNguoiDung.map((mp, i) => {
            return <tr key={i}>
                <td>{mp.tenNguoiDung}</td>
                <td>{mp.maNguoiDung}</td>
                <td>{mp.soDienThoai}</td>
                <td>{mp.email}</td>
                <td>
                    <button className="btn btn-success"
                        onClick={() => {
                            //tạo ra action nguoi dung dc click
                            let action = suaNguoiDungAction(mp)

                            //Dispatch action nguoiDungChinhSua len reducer
                            this.props.dispatch(action)
                        }}>Sửa</button>
                    <button className="btn btn-danger" onClick={() => {
                        // let action = {
                        //     Gọi hàm trong mapDispatchToProps

                        //     cách viết khác
                        //     type: 'XOA_NGUOI_DUNG',
                        //     maNguoiDung: mp.maNguoiDung
                        // }
                        this.props.dispatch(xoaNguoiDungAction(mp.maNguoiDung))
                    }}>Xóa</button>
                </td>
            </tr>
        })
    }


    render() {
        return (
            <div className="container">
                {/* <FromComponent /> */}
                <NewFormComponent />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ten nguoi dung</th>
                            <th>ma nguoi dung</th>
                            <th>So dien thoai</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderNguoiDung()}
                    </tbody>

                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung
    }
}



export default connect(mapStateToProps)(DanhSachNguoiDung)
