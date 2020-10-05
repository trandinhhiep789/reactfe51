import React, { Component } from 'react'

export default class DemoIfElseAndState extends Component {

    // isLogin là thuộc tính của class
    //true: đã đăng nhập => hiện tên
    //False: chưa đăng nhập => hiện nút login

    //state có sẵn ko phải tự đặt, dùng để lưu và cập nhật những biến cần thay đổi
    state = {
        isLogin: false
    }


    // isLogin = false ko xài nữa, xài cái trên vì ko load (render) lại dc

    onlogin = () =>{
        // console.log('abc')
        // console.log(this.isLogin = true)
        // this.state.isLogin = true //sai luôn vì ko load (render) lại dc, phải thêm cái dưới nữa
        this.setState({
            isLogin : true
        })
    }

    renderLogin = () => {
        if(this.state.isLogin){
            //đúng hiện tên
            return <p>ELTR13</p>

        }else{
            //sai hiện nút login
            return <button className="btn btn-danger" onClick={this.onlogin}>Login</button>
        }
    }

    //reder là phương thức cập nhật giao diện
    render() {
        console.log("run render")
        return (
            <div>
                <h2>If Else And State</h2>
                {
                    this.renderLogin()
                }
            </div>
        )
    }
}
