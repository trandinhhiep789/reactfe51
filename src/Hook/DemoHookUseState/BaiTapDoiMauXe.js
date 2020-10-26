import React, { useState } from 'react'

//những giá trị ko phải state thì để ở ngoài export default , vd: const arr = []

export default function BaiTapDoiMauXe() {

    const [stateHinh, setState] = useState("./img/car/products/red-car.jpg")

    const handleChangeColor = (hinhAnh) => {
        setState(hinhAnh) // sau khi setState xong thì nó sẽ load lại từ đầu(từ export default xuống), nên muốn coi giá trị state mới thì để console ờ ngoài
        //những giá trị ko phải state thì để ở ngoài export default , vd: const arr = []
    }

    return (
        <section className="show-room">
            <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
            <div className="container">
                <div className="chose__color d-flex justify-content-around">
                    <button
                        className="btn"
                        onClick={() =>
                            handleChangeColor("./img/car/products/black-car.jpg")
                        }
                    >
                        <img
                            src="./img/car/icons/icon-black.jpg"
                            alt="hinh"
                            style={{ width: 50 }}
                        />
                    </button>
                    <button
                        className="btn"
                        onClick={() =>
                            handleChangeColor("./img/car/products/red-car.jpg")
                        }
                    >
                        <img
                            src="./img/car/icons/icon-red.jpg"
                            alt="hinh"
                            style={{ width: 50 }}
                        />
                    </button>
                    <button
                        className="btn"
                        onClick={() =>
                            handleChangeColor("./img/car/products/silver-car.jpg")
                        }
                    >
                        <img
                            src="./img/car/icons/icon-silver.jpg"
                            alt="hinh"
                            style={{ width: 50 }}
                        />
                    </button>
                    <button
                        className="btn"
                        onClick={() =>
                            handleChangeColor("./img/car/products/steel-car.jpg")
                        }
                    >
                        <img
                            src="./img/car/icons/icon-steel.jpg"
                            alt="hinh"
                            style={{ width: 50 }}
                        />
                    </button>
                </div>
                <div className="car mt-2">
                    <img className="img-thumbnail" src={stateHinh} alt="hinh" />
                </div>
            </div>
        </section>

    )
}
