import React, { useState } from "react";
// import MenuListDropDown from "./MenuListDropdown";

export default function MenuDropDown(props) {
  const [isMenuDropDown, setMenuDropDown] = useState(false);
  
  const togguleMenu = () => {
    setMenuDropDown(!isMenuDropDown);
  }
  
  return (
      <div className="app-menu-dropdown-rapper">
      <span className="app-menu-dropdown-trigger" onClick={togguleMenu}>
        <i className="material-icons">expand_more</i>
      </span>
        <MenuDropDownList show={isMenuDropDown} togguleMenu={togguleMenu}></MenuDropDownList>
      </div>
    )  
}


function MenuDropDownList(props) {
  if (props.show) {
    return (
      <div className="app-menu-dropdown">
        <ul className="app-menu-dropdown-list">
          <li className="app-menu-dropdown-trigger" onClick={() => props.togguleMenu()}>
          <i className="material-icons">expand_less</i>
          </li>
          <li className="app-menu-item">
            menu1
          </li>
          <li className="app-menu-item">
            menu2
          </li>
        </ul>
      </div>
    )  
  } else {
    return null;
  }
}
