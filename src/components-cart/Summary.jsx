import React, { Component } from "react";
import style from "./Summary.module.css";

export class Summary extends Component {
  render() {
    return (
      <div className={style.container}>
        <h2 className={style.h2}>SUMMARY</h2>
        <div className={style.total}>
          <h4>SubTotal</h4>
          <h4>{this.props.total.toFixed(2)}</h4>
        </div>
        <div className={style.total}>
          <h4>Total Before Taxes</h4>
          <h4>{this.props.total.toFixed(2)}</h4>
        </div>
      </div>
    );
  }
}

export default Summary;
