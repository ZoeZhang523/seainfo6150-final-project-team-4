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
                <span className={style.title}>{this.props.item.title}</span>
            </div>
        );
    }
}
export default ItemDisplay;
