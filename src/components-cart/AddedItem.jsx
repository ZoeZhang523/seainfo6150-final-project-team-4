import React, { Component } from "react";
import style from "./AddedItem.module.css";

class AddedItem extends Component {
  render() {
    return (
      <div className={style.addedItemContainer}>
        <div className={style.imageBox}>
          <img
            className={style.img}
            src="/images/treefrog.jpg"
            alt="tree frog"
          />
        </div>
        <div className={style.descripBox}>
          <h2>{this.props.product.name} </h2>
          <h4>xxxxxxxxxx</h4>
          <p>xxxxxxxxxxx</p>
        </div>
        <div className={style.priceBox}>
          <h2>$ {this.props.product.price}</h2>
        </div>
      </div>
    );
  }
}

export default AddedItem;
