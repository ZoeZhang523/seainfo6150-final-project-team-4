import React, { Component } from 'react';
import Banner from '../PublicComponents/Banner/Banner';
import CategoryList from './Category/CategoryList';
import RecommendationBanner from './Recommendation/RecommendationBanner';
import LargeItemDisplay from './LargeItemDisplay/LargeItemDisplay';

class Home extends Component {
    state = {
        BannerImg: [
            {
                img: '/images/banner_1.jpg',
                link: '/Item-Detail-Page'
            },
            {
                img: '/images/banner_2.jpg',
                link: '/Item-Detail-Page'
            }
        ],
        Category: [
            {
                title: 'c1',
                img: '/images/category_1.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c2',
                img: '/images/category_2.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c3',
                img: '/images/category_3.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c4',
                img: '/images/category_4.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c5',
                img: '/images/category_5.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c6',
                img: '/images/category_6.jpg',
                link: 'www.images.com'
            }
        ],
        Recommendation: [
            {
                title: 'Recommend 1',
                itemList: [
                    {
                        title: 'a',
                        img: '/images/item_1.jpg',
                        link: '/Item-Detail-Page'
                    }
                ]
            },
            {
                title: 'Recommend 2',
                itemList: [
                    {
                        title: 'b',
                        img: '/images/item_2.jpg',
                        link: '/Item-Detail-Page'
                    }
                ]
            }
        ],
        LargeItemDisplay_1: {
            title: 'largeDisplay',
            img: '/images/item_large_1.jpg',
            link: '/Item-Detail-Page',
            description: 'asdasdfa'
        }
    };

    render() {
        return (
            <div>
                <Banner imgList={this.state.BannerImg} />
                <CategoryList categoryList={this.state.Category} />
                {this.state.Recommendation.map((rec) => {
                    return (
                        <RecommendationBanner
                            key={rec.title}
                            title={rec.title}
                            itemList={rec.itemList}
                        />
                    );
                })}
                <LargeItemDisplay item={this.state.LargeItemDisplay_1} />
            </div>
        );
    }
}

export default Home;
