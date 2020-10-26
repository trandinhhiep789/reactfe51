import { SUA_NGUOI_DUNG, XOA_NGUOI_DUNG } from "../constants/QuanLyNguoiDungConst"

const stateDefault = {
    mangNguoiDung: [
        { maNguoiDung: 1, tenNguoiDung: 'Nguyen Van A', soDienThoai: '113', email: 'aaaa@gmail.com' },
        { maNguoiDung: 2, tenNguoiDung: 'Nguyen Van ii', soDienThoai: '115', email: 'dddddd@gmail.com' }
    ],
    nguoiDungChinhSua: {
        maNguoiDung: '', tenNguoiDung: '', soDienThoai: '', email: ''
    },
    stateForm: {
        values: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        maNguoiDungXoa: ''
    }
}

const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    console.log(action)
    switch (action.type) {
        case XOA_NGUOI_DUNG: {
            let mangNguoiDungCapNhat = [...state.mangNguoiDung]

            mangNguoiDungCapNhat = mangNguoiDungCapNhat.filter(nd => nd.maNguoiDung != action.maNguoiDung)
            state.mangNguoiDung = mangNguoiDungCapNhat
            return { ...state }
        }
        case SUA_NGUOI_DUNG: {
            let nguoiDungDuocClick = { ...action.maNguoiDungChinhSua }

            state.stateForm = { ...state.stateForm, values: nguoiDungDuocClick }

            return { ...state }
        }
        case 'HANDLE_CHANG_INPUT': {
            state.stateForm = { ...action.newState }
            return { ...state }
        }

        default: return { ...state }
    }
}
export default QuanLyNguoiDungReducer