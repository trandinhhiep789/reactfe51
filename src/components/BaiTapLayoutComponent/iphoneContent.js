import React, { Component } from 'react'
import IphoneItems from './iphoneItems'

export default class iphoneContent extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        
                        <IphoneItems />
                        <IphoneItems />
                        <IphoneItems />
                        <IphoneItems />
                    </div>
                </section>
            </div>

        )
    }
}
