//state Bt Game XucXac
const stateDefault = {
    banChon: '',
    daChon: '...(Tài or Xỉu)',
    mangXucXac: [{ so: 1, hinhAnh: "./img/Game/1.png" },
    { so: 1, hinhAnh: "./img/Game/1.png" },
    { so: 1, hinhAnh: "./img/Game/1.png" },],
    soBanThang: 0,
    tongSoBanChoi: 0,
    chayXong: 0,
    loading: 1,
    mangChayXong: []
}

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'TAI_XIU': {
            state.banChon = action.taiXiu
            state.daChon = action.chonChua
            return { ...state }
        }
        case 'RANDOM_XUC_XAC': {
            state.chayXong = 0
            state.loading = 2
            //tạo ra 3 con xuc xac ngau nhien roi gan cho 3 con xuc xac
            let mangXucXacNgauNhien = []

            for (var i = 0; i < 3; i++) {
                const soNgauNhien = Math.floor(Math.random() * 6) + 1
                const xucXacNgauNhien = {
                    so: soNgauNhien,
                    hinhAnh: `./img/Game/${soNgauNhien}.png`
                }
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }

            // state.tongSoBanChoi += 1

            state.mangXucXac = mangXucXacNgauNhien

            return { ...state }
        }

        case 'END_GAME': {
            let tongDiem = state.mangXucXac.reduce(
                (tongDiemXX, xucXac, index) => {
                    return tongDiemXX += xucXac.so
                }, 0)
            if ((tongDiem > 9 && state.daChon === 'Tài') ||
                (tongDiem <= 9 && state.daChon === 'Xỉu')) {
                state.soBanThang += 1
            }

            if (tongDiem >= 9) {
                state.tongDiem = tongDiem
            }
            state.chayXong = 1;
            state.loading = 1
            // state.tongSoBanChoi += 1
            if (state.daChon === "Tài" || state.daChon === "Xỉu") {
                state.tongSoBanChoi += 1
            }
            return { ...state }

        }

        default:
            return { ...state }
    }
}

export default BaiTapGameXucXacReducer