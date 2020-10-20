import React, { Component } from 'react'
import swal from 'sweetalert2'

export default class FromComponent extends Component {

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
        }
    }

    handleChangeInput = (event) => {
        //lấy name và value
        let { name, value } = event.target

        //lấy ra các thuộc tính tự thêm gọi là attribute (attribute types)
        let types = event.target.getAttribute('types')
        console.log(types)

        //xử lý value
        let newValue = { ...this.state.value } // tạo value mới = value cũ
        newValue[name] = value // thay đổi giá trị bên trong value

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


    render() {
        return (
            <div>
                <form className="card text-left" onSubmit={(event) => {
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
                                    <input types="maNguoiDung" value={this.state.value.maNguoiDung} className="form-control" name="maNguoiDung"
                                        onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.maNguoiDung}</p>
                                </div>
                                <div className="form-group">
                                    <span>Ten nguoi dung</span>
                                    <input types="tenNguoiDung" value={this.state.value.tenNguoiDung} className="form-control" name="tenNguoiDung"
                                        onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.tenNguoiDung}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <span>So dien thoai</span>
                                    <input types="soDienThoai" types="phoneNumber" value={this.state.value.soDienThoai} className="form-control" name="soDienThoai"
                                        onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.soDienThoai}</p>
                                </div>
                                <div className="form-group">
                                    <span>email</span>
                                    <input types="email" value={this.state.value.email} className="form-control" name="email"
                                        onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.error.email}</p>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-success">Them nguoi dung</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
