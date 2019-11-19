import React, { Component } from 'react';
import Banner from '../PublicComponents/Banner/Banner';
import CategoryList from './Category/CategoryList';
import RecommendationBanner from './Recommendation/RecommendationBanner';
import LargeItemDisplay from './LargeItemDisplay/LargeItemDisplay';

class Home extends Component {
    state = {
        BannerImg: [
            {
                img: '/images/treefrog.jpg',
                link: 'www.images.com'
            },
            {
                img: '/images/1.png',
                link: 'www.images.com'
            }
        ],
        Category: [
            {
                title: 'c1',
                img: '/images/treefrog.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c2',
                img: '/images/treefrog.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c3',
                img: '/images/treefrog.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c4',
                img: '/images/treefrog.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c5',
                img: '/images/treefrog.jpg',
                link: 'www.images.com'
            },
            {
                title: 'c6',
                img: '/images/treefrog.jpg',
                link: 'www.images.com'
            }
        ],
        Recommendation: [
            {
                title: 'Recommend 1',
                itemList: [
                    {
                        title: 'a',
                        img: '/images/treefrog.jpg',
                        link: 'www.images.com'
                    }
                ]
            },
            {
                title: 'Recommend 2',
                itemList: [
                    {
                        title: 'b',
                        img: '/images/treefrog.jpg',
                        link: 'www.images.com'
                    }
                ]
            }
        ],
        LargeItemDisplay_1: {
            title: 'largeDisplay',
            img: '/images/treefrog.jpg',
            link: 'www.images.com',
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
