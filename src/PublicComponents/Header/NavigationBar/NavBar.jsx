import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../../../Login/Login.jsx';
import App from '../../../App.js';

class NavBar extends Component {
    render() {
        return (
            <Router>
                <div className='navBar'>
                    <h3>Category</h3>
                    <div className='menu'>
                        <div className='cat'>
                            <ul>
                                <li>
                                    <Link to='/cat' id='cat'>
                                        Cat
                                    </Link>
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
                        <div className='dog'>
                            <ul>
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

export default NavBar;
