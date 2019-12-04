import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';
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
                            src='https://img.icons8.com/cotton/64/000000/cat--v3.png'
                            alt=''
                        />
                    </a>
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
                        {/*<img
                            id='cart'
                            src='https://www.paintoolkit.org/assets/img/icons/icon-shopping-cart.svg'
                            alt='cart'
                        />*/}
                        <Icon
                            type='shopping-cart'
                            style={{ fontSize: '30px' }}
                        />
                    </a>
                </div>
                <div className='account'>
                    <a href='/Login'>
                        {/*<img
                            width='30px'
                            id='account'
                            src='https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg'
                            alt='account'
                        />*/}
                        <Icon type='user' style={{ fontSize: '30px' }} />
                    </a>
                </div>
            </div>
        );
    }
}

export default TopBar;
