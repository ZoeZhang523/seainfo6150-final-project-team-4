import React, { Component } from "react";
import style from "./ShippingInfo.module.css";
import InfoInput from "./InfoInput";

export class ShippingInfo extends Component {
  render() {
    return (
      <div className={style.container}>
        <h2>Shipping Information</h2>
        <div className={style.fullName}>
          <InfoInput textLabel={"First Name"} />
          <InfoInput textLabel={"Last Name"} />
        </div>
        <div>
          <InfoInput textLabel={"Street Address"} />
        </div>
        <div className={style.location}>
          <InfoInput textLabel={"City"} />
          <InfoInput textLabel={"State"} />
          <InfoInput textLabel={"Zip Code"} />
        </div>
        <div>
          <InfoInput textLabel={"Phone"} />
        </div>
      </div>
    );
  }
}

export default ShippingInfo;
