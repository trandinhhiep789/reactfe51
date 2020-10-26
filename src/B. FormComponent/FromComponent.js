import React, { Component } from 'react'
import swal from 'sweetalert2'
import { connect } from 'react-redux'
import { xoaNguoiDungAction } from '../redux/actions/QuanLyNguoiDungAction'

class FromComponent extends Component {

    state = {
        value: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        error: {
            maNguoiDung: '',
            tenNguoiDung: '',
            soDienThoai: '',
            email: ''
        },
        maNguoiDungXoa: ''
    }

    handleChangeInput = (event) => {
        //lấy name và value
        let { name, value } = event.target

        //lấy ra các thuộc tính tự thêm gọi là attribute (attribute types)
        let types = event.target.getAttribute('types')
        console.log(types)

        //xử lý value
        let newValue = { ...this.state.value } // tạo value mới = value cũ
        newValue[name] = value // thay đổi giá trị bên trong value, gõ đến đâu kt đến đấy

        //xử lý error
        let newErrors = { ...this.state.error }
        newErrors[name] = value.trim() === '' ? "Khong duoc bo trong" : ''

        //validation các trường đặc biệt
        if (types === 'phoneNumber') {
            const regexNumber = /^[0-9]+$/
            if (!regexNumber.test(value.trim())) {
                newErrors[name] = "Dữ liệu phải là số"
            }
        }
        if (types === "email") {
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regexEmail.test(value.trim())) {
                newErrors[name] = "Email khong hop le"
            }
        }



        this.setState({
            value: newValue,// gán value = value mới
            error: newErrors
        })

        // this.setState({
        // maNguoiDung: value
        // maNguoiDung: value
        // ...
        //     [name]: value
        // }, () => {
        //     console.log(this.state)
        // })
    }

    //giải pháp 1: sử lụng lifeCycle componentWillReceiveprops
    //hàm này chạy khi props thay đổi và trước khi render
    componentWillReceiveProps(newProps) {
        //khi bấm nút sửa => props thay đổi ta lấy props từ người dùng chỉnh sửa (this.props.nguoiDungChinhSua) ta gán vào state của component => và cho render từ state
        this.setState({
            value: newProps.nguoiDungChinhSua
        })
    }



    render() {


        // lấy giá trị từ QuanLyNguoiDungReducer về rander lên các value
        // let { maNguoiDung, tenNguoiDung, soDienThoai, email } = this.props.nguoiDungChinhSua
        let { maNguoiDung, tenNguoiDung, soDienThoai, email } = this.state.value

        return (
            <div>
                {/* autocomplete="off" */}
                <form
                    autocomplete="off" className="card text-left" onSubmit={(event) => {
                        event.preventDefault()

                        let valid = true;
                        //duyệt thuộc tính  trong object value (duyệt thuộc tính trong đối tượng dùng ES6 for in)

                        for (let tenThuocTinh in this.state.value) {
                            if (this.state.value[tenThuocTinh].trim() === '') {
                                valid = false
                            }
                        }

                        for (let tenThuocTinh in this.state.error) {
                            if (this.state.error[tenThuocTinh].trim() !== '') {
                                valid = false
                            }
                        }

                        if (!valid) {
                            // alert('dữ liệu ko hợp lệ')
                            swal.fire('Thong bao', 'them du lieu khong hop le', 'error')
                            return // chặn sự kiện submit
                        }

                        swal.fire('Thong bao', 'them du lieu khong hop le', 'success')
                        console.log('submit')
                    }}>
                    <div className="card-header bg-dark text-light font-weight-bold">
                        <span>Thong tin nguoi dung</span>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <span>Ma nguoi dung</span>
                                    {/* thay vi trỏ dến từng ô để lấy value thì mỗi input đều có
                                    value luôn */}
                                    <input types="maNguoiDung" value={maNguoiDung} className="form-control" name="maNguoiDung"
                                        onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.maNguoiDung}</p>
                                </div>
                                <div className="form-group">
                                    <span>Ten nguoi dung</span>
                                    <input types="tenNguoiDung" value={tenNguoiDung} className="form-control" name="tenNguoiDung"
                                        onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.tenNguoiDung}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <span>So dien thoai</span>
                                    <input types="soDienThoai" types="phoneNumber" value={soDienThoai} className="form-control" name="soDienThoai"
                                        onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.soDienThoai}</p>
                                </div>
                                <div className="form-group">
                                    <span>email</span>
                                    <input types="email" value={email} className="form-control" name="email"
                                        onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.email}</p>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-success">Them nguoi dung</button>
                            </div>

                            <div className="text-right mt-5 d-flex col-12">
                                <input name="maNguoiDungXoa" placeholder="Nhap Ma Nguoi Dung Can Xoa" className="form-control"
                                    onChange={(e) => {
                                        this.setState({
                                            maNguoiDungXoa: e.target.value
                                        })
                                    }} />
                                <button type="button" className="btn btn-danger"
                                    onClick={() => {
                                        //dispatch maNguoiDung lên reudcer
                                        // let action = {
                                        //     type: 'XOA_NGUOI_DUNG',
                                        //     maNguoiDung: this.state.maNguoiDungXoa
                                        // }
                                        //cách 2
                                        this.props.dispatch(xoaNguoiDungAction(this.state.maNguoiDungXoa))
                                    }}
                                >xoa</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        nguoiDungChinhSua: state.QuanLyNguoiDungReducer.nguoiDungChinhSua
    }
}


export default connect(mapStateToProps)(FromComponent)
