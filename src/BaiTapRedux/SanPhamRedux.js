import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
    render() {

        let { sanPham } = this.props

        return (
            <div className="card text-left">
                <img style={{ width: '100%', height: 300 }} className="card-img-top" src={sanPham.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                    <button onClick={() => {
                        this.props.themGioHang(sanPham)
                    }} className="btn btn-success">
                        Thêm giỏ hàng
                    </button>
                </div>;

            </div>
        )
    }
}

const mapStateToProps = (dispatch) => {
    return {

    }
}


//dispatch: phướng thức setstate
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
            //từ sp dc click tạo ra sp giỏ hàng
            let spGH = { ...sanPhamClick, soLuong: 1 }

            //để gửi giá trị lên reducer còn 1 object

            // action có 2 thuộc tính: type, giá trị gửi đi
            let action = {
                type: 'THEM_GIO_HANG',
                spGH: spGH
            }

            //dùng hàm dispatch mà redux cung cấp lên reducer
            dispatch(action)

            console.log(action)
        }
    }
}

//Tham số 1: (callbackFunction): lấy giá trị từ reducer về
//Tham số 2: (callbackFunction): đưa các giá trị lên reducer
export default connect(null, mapDispatchToProps)(SanPhamRedux)
