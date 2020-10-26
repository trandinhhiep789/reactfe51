import React from 'react'
import { useDispatch } from 'react-redux'


export default function KetQuaTroChoiF() {
    const dispatch = useDispatch()
    return (
        <div className="text-center">
            <button className="btn btn-success m-5">
                <span className="display-4" onClick={() => {
                    let action = {
                        type: 'RANDOM_XUC_XAC'
                    }
                    dispatch(action)
                }}>
                    play game
                </span>
            </button>
        </div>
    )
}
