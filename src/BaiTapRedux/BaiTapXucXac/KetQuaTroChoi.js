import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {

    rederKetQua = () => {
        let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
            return tongDiemXX += xucXac.so;
        }, 0)

        let ketQua = tongDiem > 9 ? 'Tài' : 'Xỉu'
        return <div>
            <span className="display-4 text-dark">{tongDiem} - {ketQua}</span>
        </div>
    }

    render() {
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                    {this.rederKetQua()}
                </div>
                <div className="display-4">
                    Bạn chọn : <span className="text-danger">{this.props.banChon}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng : <span className="text-danger">{this.props.soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng số lần chơi : <span className="text-danger">{this.props.tongBanChoi}</span>
                </div>

                <div className="container">
                    <button onClick={() => {
                        this.props.playGame()
                    }} className="btn btn-danger p-4">PLAY</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            // hàm để random xx 10 lần xong dừng
            let n = 0;
            let ranDomXucXac = setInterval(() => {
                const action = {
                    type: "RANDOM_XUC_XAC",
                };
                dispatch(action);
                n++;
                if (n === 10) {
                    // dùng hàm setInterval
                    clearInterval(ranDomXucXac);
                    //   dispatch action xử lý kết quả
                    const actionXLKQ = {
                        type: 'END_GAME'
                    }
                    dispatch(actionXLKQ);
                }
            }, 100);
        },
    };
};

const mapStateToProps = state => {
    return {
        banChon: state.stateBaiTapGameXucXac.banChon,
        soBanThang: state.stateBaiTapGameXucXac.soBanThang,
        tongBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)
