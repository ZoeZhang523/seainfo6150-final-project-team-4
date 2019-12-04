import React, { Component } from 'react';
import './Footer.css';
import { BrowserRouter as Link } from 'react-router-dom';
import { Icon } from 'antd';
import 'antd/dist/antd.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='customerService'>
                    <h2>Customer Service</h2>
                    <div className='customerServiceList'>
                        <ul className='animals'>
                            <li>
                                <h3>
                                    <Link to='/AboutUs'>About Us</Link>
                                </h3>
                            </li>
                            <li>
                                <p id='contactus'>Contact Us:</p>
                            </li>
                            <li>
                                <Icon
                                    className='contact'
                                    type='facebook'
                                    style={{ fontSize: '25px' }}
                                />
                                <Icon
                                    className='contact'
                                    type='twitter'
                                    style={{ fontSize: '25px' }}
                                />
                                <Icon
                                    className='contact'
                                    type='instagram'
                                    style={{ fontSize: '25px' }}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='siteMap'>
                    <h2>Site Map</h2>
                    <div className='siteMapCat'>
                        <ul className='catList'>
                            <li>
                                <h3>
                                    <Link to='/category/cat'>Cat</Link>
                                </h3>
                            </li>
                            <li>
                                <Link to='/category/cat/food/dry_food'>
                                    Dry Food
                                </Link>
                            </li>
                            <li>
                                <Link to='/category/cat/food/wet_food'>
                                    Wet Food
                                </Link>
                            </li>
                            <li>
                                <Link to='/category/cat/toy'>Cat Toys</Link>
                            </li>
                            <li>
                                <Link to='/category/cat/bed'>Cat Beds</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='siteMapDog'>
                    <ul className='dogList'>
                        <li>
                            <h3>
                                <Link to='/category/dog'>Dog</Link>
                            </h3>
                        </li>
                        <li>
                            <Link to='/category/dog/food/dry_food'>
                                Dry Food
                            </Link>
                        </li>
                        <li>
                            <Link to='/category/dog/food/wet_food'>
                                Wet Food
                            </Link>
                        </li>
                        <li>
                            <Link to='/category/dog/toy'>Dog Toys</Link>
                        </li>
                        <li>
                            <Link to='/category/dog/bed'>Dog Beds</Link>
                        </li>
                    </ul>
                </div>
                <div className='siteMapSmallPet'>
                    <ul className='dogList'>
                        <li>
                            <h3>
                                <Link to='/category/small_pet'>Small Pet</Link>
                            </h3>
                        </li>
                        <li>
                            <Link to='/category/small_pet/food'>
                                Small Pet Food
                            </Link>
                        </li>
                        <li>
                            <Link to='/category/small_pet/toy'>
                                Small Pet Toys
                            </Link>
                        </li>
                        <li>
                            <Link to='/category/small_pet/bed'>
                                Small Pet Beds
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='cute'>
                    <img
                        src='https://img.icons8.com/cotton/64/000000/cat--v3.png'
                        srcSet="
                        https://img.icons8.com/cotton/64/000000/cat--v3.png 5x,
                        https://img.icons8.com/cotton/64/000000/cat--v3.png 3x,
                        https://img.icons8.com/cotton/64/000000/cat--v3.png 2x,
                        https://img.icons8.com/cotton/64/000000/cat--v3.png 1x"
                        alt='brand'
                    />
                </div>
            </div>
        );
    }
}

export default Footer;
