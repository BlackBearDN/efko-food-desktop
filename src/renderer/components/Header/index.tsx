import { useContext } from "react";
import { observer } from "mobx-react-lite"

import "./style.scss"

import {Context} from "../../index";

const Header = observer(() => {
  const {store} = useContext(Context)

  return (
    <div className={"header draggable"}>
      <div className={"header__settingsBlock nonDraggable"}>
        <button onClick={() => store.themeBool = !store.themeBool} ><i className={store.themeBool ? "fas fa-moon" : "fas fa-sun"} /></button>
      </div>
      <div className={"header__windowBlock nonDraggable"}>
        <button onClick={() => electron.api.minimizeApp()}><i className={"fas fa-minus"} /></button>
        <button onClick={() => electron.api.maximizeRestoreApp()}><i className={"fas fa-expand"} /></button>
        <button onClick={() => electron.api.closeApp()}><i className={"fas fa-times"} /></button>
      </div>
    </div>
  );
});

export default Header;
