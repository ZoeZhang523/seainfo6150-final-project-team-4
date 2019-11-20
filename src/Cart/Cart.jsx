import React, { Component } from "react";

import AddedItem from "../components-cart/AddedItem";
import style from "./Cart.module.css";
import Summary from "../components-cart/Summary";
import products from "../data/products.json";

class Cart extends Component {
  getTotal = () => {
    var total = 0;

    Object.values(products).forEach(product => {
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
            {Object.values(products).map(product => (
              <li key={product.name}>
                <AddedItem product={product} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Summary total={this.getTotal()} />
        </div>
      </div>
    );
  }
}

export default Cart;
