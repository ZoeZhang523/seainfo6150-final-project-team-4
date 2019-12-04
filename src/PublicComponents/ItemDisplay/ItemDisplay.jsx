import React, { Component } from 'react';
import style from './ItemDisplay.module.css';
import { Link } from 'react-router-dom';
class ItemDisplay extends Component {
    render() {
        return (
            <div className={style.itemDisplay}>
                <div className={style.link}>
                    <Link to={this.props.item.link}>
                        <img
                            className={style.image}
                            src={this.props.item.img}
                            alt='alt'
                        />
                    </Link>
                </div>
                <p className={style.title}>{this.props.item.title}</p>
            </div>
        );
    }
}
export default ItemDisplay;
