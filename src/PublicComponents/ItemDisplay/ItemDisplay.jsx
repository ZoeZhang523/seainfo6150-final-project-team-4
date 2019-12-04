import React, { Component } from 'react';
import style from './ItemDisplay.module.css';
import { Link } from 'react-router-dom';
class ItemDisplay extends Component {
    render() {
        return (
            <div className={style.itemDisplay}>
                <Link to={this.props.item.link} className={style.Link}>
                    <img
                        className={style.image}
                        src={this.props.item.img}
                        alt='alt'
                    />
                </Link>
                <p className={style.title}>{this.props.item.title}</p>
            </div>
        );
    }
}
export default ItemDisplay;
