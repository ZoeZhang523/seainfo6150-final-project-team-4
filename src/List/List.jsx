import React, { Component } from "react";
import style from "./List.module.css";

import products from "../data/products.json";
import { checkServerIdentity } from "tls";

class List extends Component {
  render() {
    const { name } = Object.values(products);
    return (
      <div>
        <ul>
          {Object.values(products).map(product => (
            <li className={style.li} key={product.name}>
              <input
                type="checkbox"
                onChange={this.props.toggleSelection.bind(this, product.name)}
              />
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
