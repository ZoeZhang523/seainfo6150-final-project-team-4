import React, { Component } from "react";

import AddedItem from "../components-cart/AddedItem";
import style from "./Cart.module.css";
import Summary from "../components-cart/Summary";

class Cart extends Component {
  getTotal = props => {
    var total = 0;

    props.products.forEach(product => {
      if (product.selected) {
        total = total + product.price;
      }
    });

    return total;
  };

  render() {
    return (
      <div className={style.cartContent}>
        <div>
          <ul className={style.ul}>
            {this.props.products.map(product => (
              <li key={product.name}>
                <AddedItem product={product} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Summary total={this.getTotal(this.props)} />
        </div>
      </div>
    );
  }
}

export default Cart;
