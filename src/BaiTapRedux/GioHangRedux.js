import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

//Import thư viện kết nối react component và redux store
import {connect} from 'react-redux'
import SanPhamGH from './SanPhamGH'
class GioHangRedux extends Component {

    renderGioHang = () =>{
        return <SanPhamGH/>
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

        gioHang:state.StateBaiTapGioHang.gioHang
    }
}


export default connect(mapStateToProps)(GioHangRedux);// kết nối giữa gioHangReduxComponent và radux store