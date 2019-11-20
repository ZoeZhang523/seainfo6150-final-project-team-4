import React, { Component } from "react";
import style from "./InfoInput.module.css";

export class InfoInput extends Component {
  render() {
    return (
      <div className={style.container}>
        <h5 className={style.textLabel}>{this.props.textLabel}</h5>
        <input
          type="text"
          name={this.props.textLabel}
          placeholder={this.props.textLabel}
          className={style.input}
        />
      </div>
    );
  }
}

export default InfoInput;
