import React, { Component } from 'react'
import Carousel from './Carousel'
import carousel from './Carousel'
import Header from './Header'
import IphoneContent from './iphoneContent'
import iphoneItems from './iphoneItems'
import LaptopConten from './LaptopConten'
import Promotion from './Promotion'

export default class BaiTapLayOut1 extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Carousel></Carousel>
                <IphoneContent></IphoneContent>
                <LaptopConten></LaptopConten>
                <Promotion></Promotion>
            </div>
        )
    }
}
