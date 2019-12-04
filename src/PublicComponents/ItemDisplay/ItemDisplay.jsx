import React, { Component } from 'react';
import style from './ItemDisplay.module.css';

class ItemDisplay extends Component {
    render() {
        return (
            <div className={style.itemDisplay}>
                <a href={this.props.item.link}>
                    <img
                        className={style.image}
                        src={this.props.item.img}
                        alt='alt'
                    />
                </a>
                <p className={style.title}>{this.props.item.title}</p>
            </div>
        );
    }
}
export default ItemDisplay;
