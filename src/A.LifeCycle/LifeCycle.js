import React, { Component } from 'react'
import ChildComponenet from './ChildComponenet'

export default class LifeCycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            number: {
                index: 1,
            }
        }
        console.log('1.constructor')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('2.getDerivedStateFromProps')
        return null
    }




    render() {
        console.log("3.render")
        return (
            <div>
                <header>Header Component</header>
                <h1>{this.state.number.index}</h1>
                <button onClick={() => {
                    let newNumber = { ...this.state.number }
                    newNumber.index += 1
                    this.setState({
                        number: newNumber
                    })
                }}>+</button>
                {/* {this.state.number < 3 ? <ChildComponenet /> : 'x'} */}
                <ChildComponenet number={this.state.number} />
            </div>
        )
    }

    componentDidMount() {
        //gọi API tại didMount
        console.log("4.componentDidMount")
    }

    //chạy khi state thay đổi
    componentDidUpdate() {
        console.log("5.componentDidUpdate")
    }
}
