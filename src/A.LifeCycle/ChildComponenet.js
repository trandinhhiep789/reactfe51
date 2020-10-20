import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log("Child1.getDerivedStateFromProps_Child");
    }

    //ngăn render lại bên cha
    // shouldComponentUpdate() {
    //     console.log("Child2.shouldComponentUpdate_Child");
    // }
    render() {
        console.log("render_Child");
        return <div>
            <h3>Child number: {this.props.number.index}</h3>
            Conponent child
        </div>;
    }
    componentDidMount() {
        //   gọi API tại Didmount
        console.log("Child3.componentDidMount_Child");
    }
    componentDidUpdate() {
        console.log("Child4.componentDidUpdate_Child");
    }
    componentWillUnmount() {
        //Life Cycle chạy trc khi component mất khỏi giao diện
        console.log("componentWillUnmount")
    }
}