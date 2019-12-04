import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';
import NavBar from '../NavigationBar/NavBar.jsx';
import './TopBar.css';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({ keyword: event.target.value });
    };
    render() {
        return (
            <div className='topBar'>
                <div className='logo'>
                    <a href='/'>
                        <img
                            id='logo'
                            srcSet="
                            https://img.icons8.com/cotton/64/000000/cat--v3.png 5x,
                            https://img.icons8.com/cotton/64/000000/cat--v3.png 3x,
                            https://img.icons8.com/cotton/64/000000/cat--v3.png 2x,
                            https://img.icons8.com/cotton/64/000000/cat--v3.png 1x"
                            src='https://img.icons8.com/cotton/64/000000/cat--v3.png'
                            alt=''
                        />
                        <p className='header'>DoggyCat</p>
                    </a>
                </div>
                <div className='navbar'>
                    <NavBar />
                </div>
                <div className='search_box'>
                    <form className='search_form'>
                        <input
                            className='search_text'
                            type='search'
                            value={this.state.keyword}
                            onChange={this.handleChange}
                        />
                        <Link to={'/Search-Result/' + this.state.keyword}>
                            <Button
                                className='search_btn'
                                size='large'
                                style={{ backgroundColor: '#ff8c00' }}>
                                search
                            </Button>
                        </Link>
                    </form>
                </div>
                <div className='cart'>
                    <a href='/Cart'>
                        <Icon
                            type='shopping-cart'
                            style={{ fontSize: '30px' }}
                        />
                    </a>
                </div>
                <div className='account'>
                    <a href='/Login'>
                        <Icon type='user' style={{ fontSize: '30px' }} />
                    </a>
                </div>
            </div>
        );
    }
}

export default TopBar;
