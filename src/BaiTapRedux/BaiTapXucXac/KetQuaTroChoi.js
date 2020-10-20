import React, { Component } from 'react'
import { connect } from 'react-redux'



class KetQuaTroChoi extends Component {

    rederKetQua = () => {
        let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
            return tongDiemXX += xucXac.so;
        }, 0)

        let ketQua = tongDiem > 9 ? 'Tài' : 'Xỉu'
        return ((this.props.daChon === "Tài") || (this.props.daChon === "Xỉu")) && (this.props.loading === 1) ? <div>
            <span className="display-4 text-dark">{tongDiem} - {ketQua}</span>
        </div> : ''
    }


    renderChonTruoc = () => {
        return (this.props.daChon !== "Tài") && (this.props.daChon !== "Xỉu") && (this.props.chayXong === 1) ? <div className="display-4 bg-white px-4">
            <span className="text-danger ">Hãy Chọn Tài Hoặc Xỉu!!!!!!!!!!!!</span>
        </div> : ''
    }


    renderLoading = () => {
        return this.props.loading === 2 ? <div className="">
            <span className="display-4 text-dark">Loading...</span>
        </div> : ''
    }

    render() {
        return (
            <div className="container text-center mt-5">

                {this.renderLoading()}

                {this.rederKetQua()}

                {this.renderChonTruoc()}

                <div className="display-4">
                    Bạn chọn : <span className="text-danger">{this.props.daChon}</span>
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
                    // chayXong: 1
                };
                dispatch(action);

                n++;
                if (n === 10) {
                    clearInterval(ranDomXucXac);

                    //   dispatch action xử lý kết quả
                    const actionXLKQ = {
                        type: 'END_GAME'
                    }
                    dispatch(actionXLKQ);
                }
            }, 100); //100 tốc độ nhanh chậm thôi

        },
    };
};

const mapStateToProps = state => {
    return {
        banChon: state.stateBaiTapGameXucXac.banChon,
        daChon: state.stateBaiTapGameXucXac.daChon,
        soBanThang: state.stateBaiTapGameXucXac.soBanThang,
        tongBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
        chayXong: state.stateBaiTapGameXucXac.chayXong,
        loading: state.stateBaiTapGameXucXac.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi)
