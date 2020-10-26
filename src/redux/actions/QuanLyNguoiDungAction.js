//file chứa action gọi lên reducer

import { XOA_NGUOI_DUNG, SUA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst"

export const xoaNguoiDungAction = (maNguoiDung) => {
    return {
        type: XOA_NGUOI_DUNG,
        maNguoiDung
    }
}


//Định nghĩa sửa người dùng
export const suaNguoiDungAction = (nguoiDung) => {
    return {
        type: SUA_NGUOI_DUNG,
        maNguoiDungChinhSua: nguoiDung
    }
}