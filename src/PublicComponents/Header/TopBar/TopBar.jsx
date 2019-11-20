import React, { Component } from "react";
import "./TopBar.css";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: " "
    };
  }
  handleChange(event) {
    this.setState({
      searchResult: event.target.value
    });
  }
  render() {
    return (
      <div className="topBar">
        <div className="logo">
          <a href="/">
            <img
              id="logo"
              src="https://img.icons8.com/cotton/64/000000/cat--v3.png"
              alt=""
            />
          </a>
        </div>
        <div className="search_box">
          <input className="search_text" />
          <button
            className="search_btn"
            onClick={() => this.props.history.push("/Search-Result")}
          >
            Search
          </button>
        </div>
        <div className="cart">
          <a href="/Cart">
            <img
              id="cart"
              src="https://raw.githubusercontent.com/baizn/shop-website/master/resource/img/shopcar.png"
              alt="cart"
            />
          </a>
        </div>
        <div className="account">
          <a href="/Register">
            <img
              width="30px"
              id="account"
              src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg"
              alt="account"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default TopBar;
