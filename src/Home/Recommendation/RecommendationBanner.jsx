import React, { Component } from 'react';

import ItemDisplay from '../../PublicComponents/ItemDisplay/ItemDisplay';
import style from './Recommendation.module.css';

class RecommendationBanner extends Component {
    render() {
        return (
            <div className={style.recommendDisplay}>
                <p className={style.title}>{this.props.title}</p>
                <div className={style.recommendList}>
                    {this.props.itemList.map((item) => {
                        return <ItemDisplay key={item.title} item={item} />;
                    })}
                </div>
            </div>
        );
    }
}
export default RecommendationBanner;
