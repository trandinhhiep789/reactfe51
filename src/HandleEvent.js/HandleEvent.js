import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showTitle = () => {
        alert('What')
    }

    showMess = (mess) => {
        alert(`hello ${mess}`)
    }

    render() {
        return (
            <div>

                {/* lưu ý: callback function gán vào không có 2 dấu (). */}
                {/* xài callback nếu còn nếu để this.showTitle() thì nó sẽ tự chạy mà ko cần onclick*/}
                <button onClick={this.showTitle}>Hi</button>

                {/* xài trung gian lý do ở dưới có () là vì là phương thức chứ ko phải thuộc tính nữa*/}
                {/* truyền vào 1 callback function và trả về 1 function đó là lý do ở dưới có () là vì là phương thức chứ ko phải thuộc tính nữa */}
                <button onClick={ () =>{
                    // không tham số
                    this.showTitle(); 
                }}>Show title</button>
                <br></br>

                {/* es5 */}


                {/* es6 */}{/* xài trung gian */}
                <button onClick={ () =>{
                    // có tham số
                    this.showMess('Hiep')
                }}>Show Mess</button>
            </div>
        )
    }
}
