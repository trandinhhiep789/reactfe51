import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

//Import thư viện kết nối react component và redux store
import { connect } from 'react-redux'
import SanPhamGH from './SanPhamGH'
class GioHangRedux extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGioHang, index) => {
            return <tr>
                <td>{spGioHang.maSP}</td>
                <td>{spGioHang.tenSP}</td>
                <td>
                    <img width={50} height={50} src={spGioHang.hinhAnh} />
                </td>

                <td><button onClick={() => {
                    this.props.tangGiamSoLuong(spGioHang.maSP, true)
                }}>+</button>{spGioHang.soLuong}<button onClick={() => {
                    this.props.tangGiamSoLuong(spGioHang.maSP, false)
                }}>-</button></td>

                <td>{spGioHang.giaBan}</td>
                <td>{spGioHang.soLuong * spGioHang.giaBan}</td>

                <td>
                    <button className="btn btn-danger"
                        onClick={() => {
                            this.props.xoaGioHang(spGioHang.maSP)
                        }}>Xóa</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sp</th>
                        <th>Tên sp</th>
                        <th>Hinh anh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderGioHang()}
                </tbody>
            </table>
        )
    }
}

//lấy state từ redux store biến thành props của component
//tham số state: đại diện cho rootRedux
const mapStateToProps = (state) => {
    return {
        //gioHang là tự đặt, state.StateBaiTapGioHang là gọi đến StateBaiTapGioHang trong rootReducer mà bên trong cái StateBaiTapGioHang chứa BaiTapGioHangReducer mà trong này chứa state cái giỏ hàng nên mình sẽ lấy ra dc cái giỏ hàng

        gioHang: state.StateBaiTapGioHang.gioHang
    }
}


//tạo ra 1 props để đưa giá trị lên reducer => set lại state
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            console.log(maSPClick)

            //tạo action gửi lên
            const action = {
                type: 'XOA_GIO_HANG',
                maSPClick
            }

            dispatch(action)
        },

        tangGiamSoLuong: (maSP, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            }
            dispatch(action)
        }

    }
}

export default connect(mapStateToProps)(GioHangRedux);// kết nối giữa gioHangReduxComponent và radux store