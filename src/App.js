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
      <Props></Props>
    </div>
  );
}

export default App;
