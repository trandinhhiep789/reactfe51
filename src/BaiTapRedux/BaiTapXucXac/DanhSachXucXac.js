import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachXucXac extends Component {
    renderXucXac = () => {
        return this.props.mangXucXac.map((xx, i) => {
            return <img key={i} className="m-5" src={xx.hinhAnh} style={{ width: 50 }} />
        })
    }
    render() {
        return (
            <div className="row mt-5 text-center">
                <div className="col-3">
                    <button onClick={() => {
                        this.props.taiXiu("Tài")
                    }} className=" p-5 btn btn-success display-4" style={{ borderRadius: "30px" }}><span className="display-4">Tài</span></button>
                </div>
                <div className="col-6 bg-dark" style={{ borderRadius: "30px" }}>
                    {/* <img className="m-5" src={"./img/Game/6.png"} style={{ width: 50 }} />
                    <img className="m-5" src="./img/Game/6.png" style={{ width: 50 }} />
                    <img className="m-5" src="./img/Game/6.png" style={{ width: 50 }} /> */}
                    {this.renderXucXac()}
                </div>
                <div className="col-3">
                    <button onClick={() => {
                        this.props.taiXiu("Xỉu")
                    }} className=" p-5 btn btn-danger display-4" style={{ borderRadius: "30px" }}><span className="display-4">Xỉu</span></button>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac
    }
}

const mapDispatchToProps = dispatch => {
    return {
        taiXiu: (taiXiu) => {
            console.log("11111");
            const action = {
                type: 'TAI_XIU',
                taiXiu
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachXucXac)
