import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoStateless from "./components/DemoStateless";
import DemoStateFul from "./components/DemoStateFul";
import BaiTapLayOut1 from "./components/BaiTapLayoutComponent/BaiTapLayOut1";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent.js/HandleEvent";
import DemoIfElseAndState from "./DemoLogin/DemoIfElseAndState";
import BaiTapChonMauXe from "./BaiTapChonMauXe";
import DemoListAndKey from "./ListAndKeys/DemoListAndKey";
import Props from "./Props/Props";
import BaiTapGioHang from "./components/BaiTapGioHang/index";
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHangRedux";
import BaiTapXucXac from "./BaiTapRedux/BaiTapXucXac/BaiTapXucXac";
import LifeCycle from "./A.LifeCycle/LifeCycle";
import FromComponent from "./B. FormComponent/FromComponent";
import DanhSachNguoiDung from "./B. FormComponent/DanhSachNguoiDung";
import BaiTapDoiMauXe from "./Hook/DemoHookUseState/BaiTapDoiMauXe";
import DemoHookUseState from "./Hook/DemoHookUseState/DemoHookUseState";
import DemoHookUseEffect from "./Hook/DemoHookUseEffect/DemoHookUseEffect";
import DemoUseCallBack from "./Hook/DemoUseCallBack/DemoUseCallBack";
import DemoHookUseMemo from "./Hook/DemoHookUseMemo/DemoHookUseMemo";
import KetQuaTroChoi from "./BaiTapRedux/BaiTapXucXac/KetQuaTroChoi";
import GameXucXacReactF from "./Hook/GameXucXacReactF/GameXucXacReactF";

function App() {
  //Bên trong lệnh return của function component là nd là nd giao diện của thẻ này. lưu ý chỉ có 1 thẻ duy nhất vd: <div>...</div>
  return (
    //hoặc là để vầy
    // <>
    //   ...
    // <>
    <div className="App">
      {/* <DemoStateless />
      <DemoStateFul /> */}
      {/* <BaiTapLayOut1></BaiTapLayOut1> */}
      {/* <Databinding></Databinding> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <DemoIfElseAndState></DemoIfElseAndState> */}
      {/* <BaiTapChonMauXe></BaiTapChonMauXe> */}
      {/* <DemoListAndKey></DemoListAndKey> */}
      {/* <Props></Props> */}
      {/* <BaiTapGioHang /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapXucXac /> */}
      {/* <LifeCycle /> */}
      {/* <DanhSachNguoiDung /> */}
      {/* <DemoHookUseState /> */}
      {/* <BaiTapDoiMauXe /> */}
      {/* <DemoHookUseEffect /> */}
      {/* <DemoUseCallBack /> */}
      {/* <DemoHookUseMemo /> */}
      <GameXucXacReactF />

    </div>
  );
}

export default App;
