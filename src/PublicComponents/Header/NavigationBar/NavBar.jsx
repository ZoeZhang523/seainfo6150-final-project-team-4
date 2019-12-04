import React, { Component } from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../../../Login/Login.jsx';
import App from '../../../App.js';

class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>
                <h3>Category</h3>
                <div className='menu'>
                    <div className='cat'>
                        <ul>
                            <li>
                                <Link to='/Category/cat' id='cat'>
                                    Cat
                                </Link>
                            </li>
                            <li>
                                <Link to='/Category/cat/food'>Cat Food</Link>
                            </li>
                            <li>
                                <Link to='/Category/cat/toys'>Cat Toys</Link>
                            </li>
                            <li>
                                <Link to='/Category/cat/beds'>Cat Beds</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='dog'>
                        <ul>
                            <li>
                                <Link to='/Category/dog'>Dog</Link>
                            </li>
                            <li>
                                <Link to='/Category/dog/food'>Dog Food</Link>
                            </li>
                            <li>
                                <Link to='/Category/dog/toys'>Dog Toys</Link>
                            </li>
                            <li>
                                <Link to='/Category/dog/beds'>Dog Beds</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
