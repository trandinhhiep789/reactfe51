import React from 'react'
import KetQuaTroChoiF from './KetQuaTroChoiF'
import XucXacF from './XucXacF'

export default function GameXucXacReactF() {
    return (
        <div>
            <div style={{ backgroundImage: 'url(./img/Game/bgGame.png)', width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, fontFamily: "fontGame" }}>
                <div className="text-center display-4">Game xuc xac</div>
                <XucXacF />
                <KetQuaTroChoiF />
            </div>
        </div>
    )
}
