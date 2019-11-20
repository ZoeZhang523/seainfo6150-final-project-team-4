import React, { Component } from "react";
import ShippingInfo from "./ShippingInfo";
import PaymentInfo from "./PaymentInfo";
import Summary from "../components-cart/Summary";
import style from "./OrderPage.module.css";
import ActionButton from "./ActionButton";

export class OrderPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <div>
          <ShippingInfo />
          <PaymentInfo />
        </div>
        <div>
          <Summary total={100.5} />
          <ActionButton title={"Submit Payment"} />
        </div>
      </div>
    );
  }
}

export default OrderPage;
