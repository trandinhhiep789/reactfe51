import React, { Component } from 'react'
import Laptopitems from './Laptopitems'

export default class LaptopConten extends Component {
    render() {
        return (
            <div>
                <section id="laptop" class="container-fluid pt-5 pb-5 bg-light text-dark">
                    <h1 class="text-center">BEST LAPTOP</h1>
                    <div class="row">
                        <Laptopitems></Laptopitems>
                        <Laptopitems></Laptopitems>
                        <Laptopitems></Laptopitems>
                        <Laptopitems></Laptopitems>
                    </div>
                </section>
            </div>
        )
    }
}
