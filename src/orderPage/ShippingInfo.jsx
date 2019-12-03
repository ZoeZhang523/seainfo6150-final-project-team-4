import React, { Component } from "react";
import style from "./ShippingInfo.module.css";
import InfoInput from "./InfoInput";

export class ShippingInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submittedForm: null
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    this.setState({ submittedForm: data });
  };

  render() {
    return this.state.submittedForm ? (
      <div className={style.container}>
        <h2>Shipping Information</h2>
        <div> The info submitted by you is:</div>
        <div>
          <p>
            Full Name: {this.state.submittedForm.get("title")}{" "}
            {this.state.submittedForm.get("firstName")}{" "}
            {this.state.submittedForm.get("lastName")}
          </p>
          <p>Address: {this.state.submittedForm.get("streetAddress")}</p>

          <p>
            Location: {this.state.submittedForm.get("city")}
            {", "}
            {this.state.submittedForm.get("state")}{" "}
            {this.state.submittedForm.get("zipCode")}
          </p>
          <p>Phone: {this.state.submittedForm.get("phone")}</p>
        </div>
      </div>
    ) : (
      <div className={style.container}>
        <h2>Shipping Information</h2>
        <form onSubmit={this.onSubmit}>
          <div className={style.fullName}>
            <div className={style.info}>
              <label>Title</label>
              <select name="title" size="1" className={style.input}>
                <option value="" selected />
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
              </select>
            </div>
            <div className={style.info}>
              <label>First Name</label>
              <input
                type="text"
                value={this.state.firstName}
                className={style.input}
                name="firstName"
                required="true"
                pattern="[a-zA-Z]+"
              />
            </div>
            <div className={style.info}>
              <label>Last Name</label>
              <input
                type="text"
                value={this.state.lastname}
                className={style.input}
                name="lastName"
                required="true"
                pattern="[a-zA-Z]+"
              />
            </div>
          </div>
          <div className={style.info}>
            <label>Street Address</label>
            <input
              type="text"
              value={this.state.streetaddress}
              className={style.input}
              name="streetAddress"
              required="true"
              pattern="[a-zA-Z:;,*#$-+()0-9. ]+"
            />
          </div>
          <div className={style.location}>
            <div className={style.info}>
              <label>City</label>
              <input
                type="text"
                value={this.state.city}
                className={style.input}
                name="city"
                required="true"
                pattern="[a-zA-Z]+"
              />
            </div>
            <div className={style.info}>
              <label>State</label>
              <select
                required="true"
                name="state"
                size="1"
                className={style.input}
              >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA" selected>
                  Washington
                </option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className={style.info}>
              <label>Zip Code</label>
              <input
                type="text"
                value={this.state.zipcode}
                className={style.input}
                name="zipCode"
                required="true"
                placeholder="5 digits"
                pattern="[0-9]{5}"
              />
            </div>
          </div>
          <div className={style.info}>
            <label>Phone</label>
            <input
              type="text"
              value={this.state.phone}
              className={style.input}
              name="phone"
              required="true"
              placeholder="10 digits, no spaces, no simbols"
              pattern="[0-9]{10}"
            />
          </div>
          <button type="submit">Submit Info</button>
        </form>
      </div>
    );
  }
}

export default ShippingInfo;
