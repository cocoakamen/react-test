import React, { useState } from "react";
import ReactDOM from "react-dom";
import AppButton from "./AppButton";
import AppButtonFileInput from "./AppButtonFileInput";
import MenuDropDown from "./MenuDropdown";
import Modal from './Modal';

function App() {
  // Modal用
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true)
  }

  const [disableButtonGroup, setDisableGroupButton] = useState(false);
  const handleTogguleButtonClick = () => {
    const nextStatus = !disableButtonGroup;
    alert('ボタンを' + ( nextStatus ? '無効' : '有効') + 'にするよ！');
    setDisableGroupButton(nextStatus);
  }

  return (
    <div>
      <h5>ボタン</h5>
      <p>
        <AppButton buttonName="ボタン"></AppButton>
        <AppButton disable={true} buttonName="disable"></AppButton>
      </p>

      <h5>ドロップダウン隠れメニュー</h5>
      <p>
      <AppButton buttonName="ボタン"></AppButton>
      <AppButton buttonName="ボタン"></AppButton>
      <AppButton buttonName="ボタン"></AppButton>
      <AppButton buttonName="ボタン"></AppButton>
      <MenuDropDown></MenuDropDown>
      </p>

      <h5>materializeCssのGridでボタンを配置</h5>
      <div className="row">
        <div className="col s8">
          <AppButton buttonName="ボタン"></AppButton>
          <AppButton buttonName="ボタン"></AppButton>
          <AppButton buttonName="ボタン"></AppButton>
          <AppButton buttonName="ボタン"></AppButton>
          <MenuDropDown></MenuDropDown>
        </div>
        <div className="col s4">
          <AppButton buttonName="ボタン"></AppButton>
          <AppButton buttonName="ボタン"></AppButton>
        </div>
      </div>
      <h5>ボタンの状態をまとめて変更</h5>
      <p>
        <AppButton buttonName="Toggle Button" onClick={handleTogguleButtonClick}></AppButton>
        <AppButton disable={disableButtonGroup} buttonName="ボタン1"></AppButton>
        <AppButton disable={disableButtonGroup} buttonName="ボタン2"></AppButton>
        <AppButton disable={disableButtonGroup} buttonName="ボタン3"></AppButton>
      </p>
      <h5>ファイルピッカー</h5>
      <p>
        <AppButtonFileInput></AppButtonFileInput>
      </p>

      <h5>モーダル</h5>
      <p>
        <AppButton onClick={openModal} buttonName="modalを開く">Click</AppButton>
        <Modal show={showModal} setShow={setShowModal}></Modal>
      </p>

    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.querySelector("#app"));
