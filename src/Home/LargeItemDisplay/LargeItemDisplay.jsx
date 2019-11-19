import React, { Component } from 'react';

import style from './LargeItemDisplay.module.css';

class RecommendationBanner extends Component {
    render() {
        return (
            <div className={style.largeItemDisplay}>
                <a href={this.props.item.link}>
                    <img
                        className={style.image}
                        src={this.props.item.img}
                        alt='alt'
                    />
                </a>
                <div className={style.rightSide}>
                    <p className={style.title}>{this.props.item.title}</p>
                    <p className={style.description}>
                        {this.props.item.description}
                    </p>
                </div>
            </div>
        );
    }
}
export default RecommendationBanner;
