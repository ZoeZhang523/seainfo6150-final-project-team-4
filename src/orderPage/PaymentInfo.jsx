import React, { Component } from "react";
import InfoInput from "./InfoInput";
import style from "./PaymentInfo.module.css";

export class PaymentInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submittedForm: null,
      company: "Visa"
    };
  }

  onRadioChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    this.setState({ submittedForm: data });
    console.log(this.state.submittedForm);
  };

  render() {
    return this.state.submittedForm ? (
      <div className={style.container}>
        <h2>Payment Information</h2>
        <div> The info submitted by you is:</div>
        <div>
          <p>
            Cardholder Full Name:{" "}
            {this.state.submittedForm.get("cardholderFullName")}
          </p>
          <p>Card Number: {this.state.submittedForm.get("cardNumber")}</p>
          <p>Security Code: {this.state.submittedForm.get("securityCode")}</p>
          <p>Company: {this.state.submittedForm.get("company")}</p>
        </div>
      </div>
    ) : (
      <div className={style.container}>
        <h2>Payment Information</h2>
        <form onSubmit={this.onSubmit}>
          <div className={style.info}>
            <label>Cardholder Full Name</label>
            <input
              type="text"
              value={this.state.cardholderfullname}
              className={style.input}
              name="cardholderFullName"
              required="true"
              pattern="[a-zA-Z ]+"
            />
          </div>
          <div className={style.info}>
            <label>Card Number</label>
            <input
              type="text"
              value={this.state.cardnumber}
              className={style.input}
              name="cardNumber"
              required="true"
              placeholder="16 digits, no spaces, no simbols"
              pattern="[0-9]{16}"
            />
          </div>
          <div className={style.cardExtra}>
            <div className={style.info}>
              <label>Security Code</label>
              <input
                type="text"
                value={this.state.securitycode}
                className={style.input}
                name="securityCode"
                required="true"
                placeholder="3 digits"
                pattern="[0-9]{3}"
              />
            </div>
            <div className={style.info}>
              <label>Company</label>
              <div className={style.companyGroup}>
                <input
                  type="radio"
                  value="Visa"
                  checked={this.state.company === "Visa"}
                  name="company"
                  onChange={this.onRadioChange}
                  className={style.cardInput}
                />
                Visa
                <input
                  type="radio"
                  value="Mastercard"
                  checked={this.state.company === "Mastercard"}
                  name="company"
                  onChange={this.onRadioChange}
                  className={style.cardInput}
                />
                MasterCard
                <input
                  type="radio"
                  value="American Express"
                  checked={this.state.company === "American Express"}
                  name="company"
                  onChange={this.onRadioChange}
                  className={style.cardInput}
                />
                American Express
              </div>
            </div>
          </div>
          <button type="submit">Submit Info</button>
        </form>
      </div>
    );
  }
}

export default PaymentInfo;
