import React from 'react';
import TopBar from './TopBar.jsx';
import NavBar from './NavBar.jsx';
import Banner from './Banner.jsx';
import './TopBar.css';
import './NavBar.css';
import './Banner.css';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <TopBar />
                <NavBar />
                <div><Banner /></div>
            </div>
        );
    }
}


export default Header
