//File khai báo lưu trữ tất cả các state của ứng dụng
import { combineReducers } from 'redux'
import BaiTapGioHangReducer from './BTGioHangReducer'
import baiTapGameXucXacReducer from './BaiTapGameXucXacReducer'
import QuanLyNguoiDungReducer from './QuanLyNguoiDungReducer'

//state tổng của ứng dụng
const rootReducer = combineReducers({
    //nơi khai báo state theo từng nghiệp vụ
    StateBaiTapGioHang: BaiTapGioHangReducer,
    stateBaiTapGameXucXac: baiTapGameXucXacReducer,
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer
})

export default rootReducer