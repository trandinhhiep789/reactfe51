//File khai báo lưu trữ tất cả các state của ứng dụng
import { combineReducers } from 'redux'
import BaiTapGioHangReducer from './BTGioHangReducer'

//state tổng của ứng dụng
const rootReducer = combineReducers({
    //nơi khai báo state theo từng nghiệp vụ
    StateBaiTapGioHang: BaiTapGioHangReducer
})

export default rootReducer