import React, { Component } from 'react'
import FromComponent from './FromComponent'

export default class DanhSachNguoiDung extends Component {
    render() {
        return (
            <div className="container">
                <FromComponent />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ten nguoi dung</th>
                            <th>ma nguoi dung</th>
                            <th>So dien thoai</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}
