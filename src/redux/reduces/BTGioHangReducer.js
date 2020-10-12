import BaiTapGioHangRedux from "../../BaiTapRedux/BaiTapGioHangRedux"

// giá trị ban đầu
const stateDefaut = {
    gioHang: [
        {
            maSP: 1,
            tenSP: 'Iphone',
            hinhAnh: 'http://picsum.photos/50/50',
            soLuong: 1,
            giaBan: 1000
        }
    ]
}

//hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefaut, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //xử lý cập nhậ lại state
            let gioHangCapNhat = [...state.gioHang]
            //tìm sp có trong giỏ hàng ko
            const index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGH.maSP)


            if (index != -1) {
                gioHangCapNhat[index].soLuong += 1
            }
            else {
                gioHangCapNhat.push(action.spGH)
            }
            state.gioHang = gioHangCapNhat
            return { ...state }
        }
        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang]

            const index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSPClick)

            if (index !== -1) {
                gioHangCapNhat.splice(index, 1)
            }
            //cập nhật lại state.gioHang
            state.gioHang = gioHangCapNhat
            return { ...state }
        }
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.gioHang]

            //tìm ra SP
            let spGioHang = gioHangCapNhat.find(sp => sp.maSP === action.maSP)
            if (spGioHang) {
                if (action.tangGiam === true) {
                    spGioHang.soLuong += 1
                }
                else {
                    if (spGioHang.soLuong > 1) {
                        spGioHang.soLuong -= 1
                    }
                }
            }

            //cập nhật lại state.gioHang
            state.gioHang = gioHangCapNhat
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default BaiTapGioHangReducer