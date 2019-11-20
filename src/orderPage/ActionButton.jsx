import React, { Component } from "react";
import style from "./ActionButton.module.css";

export class ActionButton extends Component {
  render() {
    return (
      <div className={style.container}>
        <button className={style.button}>{this.props.title}</button>
      </div>
    );
  }
}

export default ActionButton;
