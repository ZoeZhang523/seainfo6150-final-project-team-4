import React, { Component } from 'react';
import './Footer.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../../Login/Login';

class Footer extends Component {
    render() {
        return (
            <Router>
                <div className='footer'>
                    <div className='customerService'>
                        <h3>Customer Service</h3>
                        <div className='customerServiceList'>
                            <ul className='animals'>
                                <li>
                                    <Link to='/account/order'>Track Order</Link>
                                </li>
                                <li>
                                    <Link to='/help'>Help</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='about'>
                        <h3>About Us</h3>
                        <div className='aboutContent'>
                            <p>12345</p>
                        </div>
                    </div>
                    <div className='siteMap'>
                        <h3>Site Map</h3>
                        <div className='siteMapCat'>
                            <ul className='catList'>
                                <li>
                                    <Link to='/cat'>Cat</Link>
                                </li>
                                <li>
                                    <Link to='/cat/food'>Cat Food</Link>
                                </li>
                                <li>
                                    <Link to='/cat/toys'>Cat Toys</Link>
                                </li>
                                <li>
                                    <Link to='/cat/beds'>Cat Beds</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='siteMapDog'>
                            <ul className='dogList'>
                                <li>
                                    <Link to='/dog'>Dog</Link>
                                </li>
                                <li>
                                    <Link to='/dog/food'>Dog Food</Link>
                                </li>
                                <li>
                                    <Link to='/dog/toys'>Dog Toys</Link>
                                </li>
                                <li>
                                    <Link to='/dog/beds'>Dog Beds</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='cute'>
                        <img
                            src='https://img.icons8.com/cotton/64/000000/cat--v3.png'
                            alt=''
                        />
                    </div>

                    <Switch>
                        <Route path='/cat' exact component={Login} />
                        <Route path='/cat/food' exact component={Login} />
                        <Route path='/cat/toys' exact component={Login} />
                        <Route path='/cat/beds' exact component={Login} />

                        <Route path='/dog' exact component={Login} />
                        <Route path='/dog/food' exact component={Login} />
                        <Route path='/dog/toys' exact component={Login} />
                        <Route path='/dog/beds' exact component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Footer;
