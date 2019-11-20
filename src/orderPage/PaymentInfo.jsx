import React, { Component } from "react";
import InfoInput from "./InfoInput";
import style from "./PaymentInfo.module.css";

export class PaymentInfo extends Component {
  render() {
    return (
      <div className={style.container}>
        <h2>Payment Information</h2>
        <div>
          <InfoInput textLabel={"Cardholder Full Name"} />
        </div>
        <div>
          <InfoInput textLabel={"Card Number"} />
        </div>
        <div className={style.security}>
          <InfoInput textLabel={"Security Code"} />
        </div>
      </div>
    );
  }
}

export default PaymentInfo;
