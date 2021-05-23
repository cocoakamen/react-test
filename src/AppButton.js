import React, { useState } from "react";

export default function AppButton(props) {
  if(props.disable) {
    return (
      <a className="app-button-disable">{props.buttonName}</a>
    );
  } else {
    return (
      <a className="app-button" onClick={props.onClick}>{props.buttonName}</a>
    );  
  }
};
