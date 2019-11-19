import React, { Component } from 'react';
import style from './CategoryDisplay.module.css';

class CategoryDisplay extends Component {
    render() {
        return (
            <div className={style.categoryDisplay}>
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
export default CategoryDisplay;
