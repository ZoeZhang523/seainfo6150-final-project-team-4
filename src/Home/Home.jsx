import React, { Component } from 'react';
import Banner from '../PublicComponents/Banner/Banner';
import CategoryList from './Category/CategoryList';
import RecommendationBanner from './Recommendation/RecommendationBanner';
import LargeItemDisplay from './LargeItemDisplay/LargeItemDisplay';

class Home extends Component {
    state = {
        BannerImg: [
            {
                img:
                    'https://s7d2.scene7.com/is/image/PetSmart/WEB-19-492882-Nov_19_WK_40-43_Monthlong_Slider2?$HP1801$',
                link: '/category/dog/'
            },
            {
                img:
                    'https://cms-www.chewy.com/contentAsset/raw-data/5af09439-df7c-432c-988c-c90f8854c9bb/largeImage/Autoship-Cat-Lifestyle-Window-Orange-Homepage-Hero-LARGE.jpg',
                link: '/category/cat/'
            },
            {
                img:
                    'https://cms-www.chewy.com/contentAsset/raw-data/beabbfeb-3039-4d44-8679-afa7569485cf/largeImage/CyberDeals_Homepage-Hero-LARGE_.jpg',
                link: '/category/'
            },
            {
                img:
                    'https://cms-www.chewy.com/contentAsset/raw-data/fbfc2f3d-0bd6-48f3-a892-db7d956b88fe/largeImage/TAF-Homepage-TREATS-LARGEa-Desktop112019.png',
                link: '/category/cat/food'
            }
        ],
        Category: [
            {
                title: 'Dog Food',
                img: '/images/category_1.jpg',
                link: '/category/dog/food'
            },
            {
                title: 'Dog Toy',
                img: '/images/category_2.jpg',
                link: '/category/dog/toy'
            },
            {
                title: 'Dog Bed',
                img: '/images/category_3.jpg',
                link: '/category/dog/bed'
            },
            {
                title: 'Cat Food',
                img: '/images/category_4.jpg',
                link: '/category/cat/food'
            },
            {
                title: 'Cat Toy',
                img: '/images/category_5.jpg',
                link: '/category/cat/toy'
            },
            {
                title: 'Cat Bed',
                img: '/images/category_6.jpg',
                link: '/category/cat/bed'
            },
            {
                title: 'Small Pet Food',
                img: '/images/category_7.jpg',
                link: '/category/small_pet/food'
            },
            {
                title: 'Small Pet Toy',
                img: '/images/category_8.jpg',
                link: '/category/small_pet/toy'
            },
            {
                title: 'Small Pet Bed',
                img: '/images/category_9.jpg',
                link: '/category/small_pet/bed'
            }
        ],
        Recommendation: [
            {
                title: 'Dog Supply Recommends',
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
                title: 'Cat Supply Recommends',
                itemList: [
                    {
                        title:
                            "Hill's Science Diet Adult Urinary & Hairball Control Chicken Recipe Dry Cat Food",
                        img:
                            'https://petco.scene7.com/is/image/PETCO/2459069-center-1?$ProductDetail-large$',
                        link: '/Item-Detail-Page/009'
                    },
                    {
                        title: 'ACANA Meadowlands Dry Cat Food',
                        img:
                            'https://petco.scene7.com/is/image/PETCO/2994660-center-1?$ProductDetail-large$',
                        link: '/Item-Detail-Page/0010'
                    },
                    {
                        title: 'Tiki Cat Puka Puka Luau Chicken Wet Cat Food',
                        img:
                            'https://petco.scene7.com/is/image/PETCO/2761840-center-1?$ProductDetail-large$',
                        link: '/Item-Detail-Page/0011'
                    },
                    {
                        title:
                            'Royal Canin Mother & Babycat Ultra-Soft Mousse in Sauce Variety Pack Wet Cat Food',
                        img:
                            'https://petco.scene7.com/is/image/PETCO/3038178-center-1?$ProductDetail-large$',
                        link: '/Item-Detail-Page/0012'
                    },
                    {
                        title:
                            'Leaps & Bounds Faux Leather Mouse Cat Toy with Rattle & Catnip',
                        img:
                            'https://petco.scene7.com/is/image/PETCO/2312016-left-1?$ProductDetail-large$',
                        link: '/Item-Detail-Page/0013'
                    }
                ]
            }
        ],
        LargeItemDisplay_1: {
            title: 'WARE Willow Branch Ball Chew Toy',
            img:
                'https://s7d1.scene7.com/is/image/PETCO/1368729-center-1?$ProductDetail-large$',
            link: '/Item-Detail-Page/0019',
            description:
                "Add a naturally fun flavor to playtime! This all natural willow branch chew toy is perfect for tooth trimming and playtime for small pets. This chew toy encourages healthy activity while also alleviating boredom.\n\nWholesome and appealing rabbit treat or guinea pig treat\nSatisfies your pet's natural chewing instincts\nEncourages healthy, playful activity\nMade with environmentally friendly material\nPerfect for tooth trimming"
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
