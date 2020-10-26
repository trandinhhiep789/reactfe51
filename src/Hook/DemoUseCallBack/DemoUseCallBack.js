import React, { useState, useCallback } from 'react'
import Comment from './Comment';

export default function DemoUseCallBack(props) {
    let [like, setLike] = useState(1);

    let renderNotify = () => {
        return `Bạn đã thả ${like} ♥ !`
    }

    const callbackRenderNotify = useCallback(renderNotify,
        [like],//like thay đổi thì mới dc gọi render
    )

    return (
        <div className="m-5 bg-success">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>
            <br />
            <br />
            {/* <Comment /> */}
            {/* <Comment like={like} /> */}
            {/* <Comment renderNotify={renderNotify} /> ko dc gi vầy vì like ko cần thay đổi khi dc gọi nó vẫn cứ sẽ render lại */}
            <Comment renderNotify={callbackRenderNotify} />
        </div>
    )
}
