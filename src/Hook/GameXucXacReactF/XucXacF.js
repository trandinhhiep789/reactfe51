import React from 'react'
import { connect, useSelector } from 'react-redux'

export default function XucXacF(props) {
    //useSelector là hook thay thế cho phương thức mapStateToProps của react-redux
    const { mangXucXac, } = useSelector(state => state.stateBaiTapGameXucXac) // lấy dc nhiều state về từ chỗ dấu ,

    const renderXucXac = () => {
        return mangXucXac.map((xx, i) => {
            return <img className="m-5" key={i} src={xx.hinhAnh} style={{ width: 80 }} />
        })
    }

    return (
        <div className="text-center">
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success p-5" style={{ width: '200px' }}>
                        <span className="display-4">Tài</span>
                    </button>
                </div>
                <div className="col-4">
                    {renderXucXac()}
                </div>
                <div className="col-4">
                    <button className="btn btn-danger p-5" style={{ width: '200px' }}>
                        <span className="display-4">Xỉu</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         mangXucXac: state.stateBaiTapGameXucXac.mangXucXac
//     }
// }

// export default connect(mapStateToProps)(XucXacF)
