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
                title: 'Dog Food',
                img: '/images/category_1.jpg',
                link: 'www.images.com'
            },
            {
                title: 'Dog Toy',
                img: '/images/category_2.jpg',
                link: 'www.images.com'
            },
            {
                title: 'Dog Bed',
                img: '/images/category_3.jpg',
                link: 'www.images.com'
            },
            {
                title: 'Cat Food',
                img: '/images/category_4.jpg',
                link: 'www.images.com'
            },
            {
                title: 'Cat Toy',
                img: '/images/category_5.jpg',
                link: 'www.images.com'
            },
            {
                title: 'Cat Bed',
                img: '/images/category_6.jpg',
                link: 'www.images.com'
            },
            {
                title: 'Small Pet Food',
                img: '/images/category_7.jpg',
                link: 'www.images.com'
            },
            {
                title: 'Small Pet Toy',
                img: '/images/category_8.jpg',
                link: 'www.images.com'
            },
            {
                title: 'Small Pet Bed',
                img: '/images/category_5.jpg',
                link: 'www.images.com'
            }
        ],
        Recommendation: [
            {
                title: 'Dog Recommends',
                itemList: [
                    {
                        title: 'ACANA Red Met Dry Dog Food',
                        img:
                            'https://petco.scene7.com/is/image/PETCO/2994037-center-1?$ProductDetail-xlarge$',
                        link: '/Item-Detail-Page/0001'
                    },
                    {
                        title: 'ORIJEN Six Fish Dry Dog Food',
                        img:
                            'https://petco.scene7.com/is/image/PETCO/2992218-center-1?$ProductDetail-xlarge$',
                        link: '/Item-Detail-Page/0002'
                    },
                    {
                        title:
                            "Hill's Science Diet Adult 7+ Savory Stew with Beef & Vegetables Canned Dog Food",
                        img:
                            'https://petco.scene7.com/is/image/PETCO/393720-center-1?$ProductDetail-large$',
                        link: '/Item-Detail-Page/0003'
                    },
                    {
                        title:
                            'Blue Buffalo Blue Homestyle Recipe Senior Chicken Dinner with Garden Vegetables Wet Dog Food',
                        img:
                            'https://s7d1.scene7.com/is/image/PETCO/2172244-center-1?$ProductDetail-large$',
                        link: '/Item-Detail-Page/0004'
                    },
                    {
                        title: 'KONG Tugga Wubba Dog Toy',
                        img:
                            'https://s7d1.scene7.com/is/image/PETCO/1373854-center-1?$ProductDetail-large$',
                        link: '/Item-Detail-Page/0005'
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
