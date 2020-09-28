import React, { Component } from 'react'

export default class Databinding extends Component {

    //thuộc tính của lớp đối tượng
    // => sử dụng nhiều  phương thức trong lớp đối tưởng
    hocVien = {
        ma: 1,
        avatar: 'http://picsum.photos/200/200',
        tenHocVien: 'abc'
    }

    //phương thức
    renderHocVien = () => {
        return <div className="card text-white bg-primary">
            <img className="card-img-top w-25" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.ma}</h4>
                <p className="card-text">{this.hocVien.tenHocVien}</p>
            </div>
        </div>

    }

    render() {

        //binding data là biến
        let title = 'abc'
        let imgSrc = 'http://picsum.photos/200/200'

        //biding data là hàm
        const renderImg = () => {
            //giá trị trả về chuỗi, số, jsx
            return <div classname="card text-white bg-primary">
                <img classname="card-img-top" src={imgSrc} alt />
                <div classname="card-body">
                    <h4 classname="card-title">{title}</h4>
                    <p classname="card-text">{title}</p>
                </div>
            </div>


        }

        return (


            <div className="container">
                <div id="title">
                    {title}
                </div>

                <div className="w-25">
                    <img src={imgSrc} />
                </div>

                <input className="w-25 form-control" value={title}>

                </input>
                databinding
                <div>
                    {renderImg()}
                </div>

                <h1>Thông tin học viên</h1>
                <ul>
                    <li>Tên học vien: {this.hocVien.tenHocVien}</li>
                    <li>Ma hoc vien: {this.hocVien.ma}</li>
                    <li>Hinh anh: {<img src={this.hocVien.avatar}></img>}</li>

                </ul>
                
                {/* phương thưc */}
                <div>
                    {this.renderHocVien()}
                </div>
            </div>

        )
    }
}
