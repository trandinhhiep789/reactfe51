import BaiTapGioHangRedux from "../../BaiTapRedux/BaiTapGioHangRedux"

// giá trị ban đầu
const stateDefaut = {
    gioHang: [
        {maSP:1, 
        tenSP:'Iphone',
        hinhAnh:'http://picsum.photos/50/50', 
        soLuong: 1, 
        donGia:1000}
    ]
}

//hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state=stateDefaut, action) => {
    return {...state}
}

export default BaiTapGioHangReducer