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

                {/* xài callback */}
                <button onClick={this.showTitle}>Hi</button>

                {/* xài trung gian */}
                <button onClick={ () =>{
                    // không tham số
                    this.showTitle(); 
                }}>Show title</button><br></br>

                {/* es5 */}


                {/* es6 */}
                <button onClick={ () =>{
                    // có tham số
                    this.showMess('khai')
                }}>Show Mess</button>
            </div>
        )
    }
}
