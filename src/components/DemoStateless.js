//state less component là component function(react function component)
// rfc => enter

import React from 'react'

export default function DemoStateless() {
    return (
        <div className="container">
            <div className="card text-white bg-primary w-25">
                <img className="card-img-top" src="http://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        </div>

    )
}
