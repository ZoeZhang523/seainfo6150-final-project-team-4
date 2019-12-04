import React, { Component } from 'react';
import './Footer.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Icon} from 'antd';
import 'antd/dist/antd.css';
import Category from '../../Category/Category.jsx';

class Footer extends Component {
    render() {
        return (
            <Router>
                <div className='footer'>
                    <div className='customerService'>
                        <h2>Customer Service</h2>
                        <div className='customerServiceList'>
                            <ul className='animals'>
                                <li>
                                    <h3><Link to='/AboutUs'>About Us</Link></h3>
                                </li>
                                <li>
                                    <p>Contact Us:</p>
                                </li>
                                <li>
                                    <Icon className="contact" type="facebook" style={{fontSize: '25px'}}/>
                                    <Icon className="contact" type="twitter" style={{fontSize: '25px'}}/>
                                    <Icon className="contact" type="instagram" style={{fontSize: '25px'}}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='siteMap'>
                        <h2>Site Map</h2>
                        <div className='siteMapCat'>
                            <ul className='catList'>
                                <li>
                                    <h3><Link to='/category/cat'>Cat</Link></h3>
                                </li>
                                <li>
                                    <Link to='/category/cat/food/dry_food'>Dry Food</Link>
                                </li>
                                <li>
                                    <Link to='/category/cat/food/wet_food'>Wet Food</Link>
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
                                    <h3><Link to='/category/dog'>Dog</Link></h3>
                                </li>
                                <li>
                                    <Link to='/category/dog/food/dry_food'>Dry Food</Link>
                                </li>
                                <li>
                                    <Link to='/category/dog/food/wet_food'>Wet Food</Link>
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
                                    <h3><Link to='/category/small_pet'>Small Pet</Link></h3>
                                </li>
                                <li>
                                    <Link to='/category/small_pet/food'>Small Pet Food</Link>
                                </li>
                                <li>
                                    <Link to='/category/small_pet/toy'>Small Pet Toys</Link>
                                </li>
                                <li>
                                    <Link to='/category/small_pet/bed'>Small Pet Beds</Link>
                                </li>
                            </ul>
                        </div>

                    <div className='cute'>
                        <img
                            src='https://img.icons8.com/cotton/64/000000/cat--v3.png'
                            alt=''
                        />
                    </div>

                    <Switch>
                        <Route path='/aboutUs' exact component={Category} />

                        <Route path='/category/cat' exact component={Category} />
                        <Route path='/category/cat/food' exact component={Category} />
                        <Route path='/category/cat/food/dry_food' exact component={Category} />
                        <Route path='/category/cat/food/wet_food' exact component={Category} />
                        <Route path='/category/cat/toy' exact component={Category} />
                        <Route path='/category/cat/bed' exact component={Category} />

                        <Route path='/category/dog' exact component={Category} />
                        <Route path='/category/dog/food' exact component={Category} />
                        <Route path='/category/dog/food/dry_food' exact component={Category} />
                        <Route path='/category/dog/food/wet_food' exact component={Category} />
                        <Route path='/category/dog/toy' exact component={Category} />
                        <Route path='/category/dog/bed' exact component={Category} />
                        
                        <Route path='/category/small_pet' exact component={Category} />
                        <Route path='/category/small_pet/food' exact component={Category} />
                        <Route path='/category/small_pet/toy' exact component={Category} />
                        <Route path='/category/small_pet/bed' exact component={Category} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Footer;
