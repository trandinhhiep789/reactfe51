import React, { useState, useEffect } from 'react'

export default function DemoHookUseEffect() {

    const [number, setNumber] = useState(1)
    // const [, setNumber] = useState(1)

    // useEffect(() => {
    //     hàm sẽ chạy khi lần đầu component render và các lần render lại
    //     console.log('componentDidMount')
    //     console.log('componentDidUpdate')
    // })

    //chỉ chạy 1 lần componentDidMount
    // useEffect(() => {
    //     tham số thứ 2 là mảng rổng => chỉ thay thế cho componantDidMount
    //     console.log('componentDidMount')
    // }, [])

    //biến thay đổi cái này chạy(so sánh nguyên thủy, còn object phải {...object})
    useEffect(() => {
        //tham số mảng rỗng => chỉ thay thế cho componentDidMount
        console.log('componentDidUpdate')
    }, [number])


    useEffect(() => {
        return () => {
            //hủy thì component sẽ gọi hàm này
            console.log('Thay cho componentWillUnMount')
        }
    })

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1)
            }}>setNumber</button>
        </div>
    )
}
