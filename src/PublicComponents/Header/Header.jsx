import React from 'react';
import TopBar from './TopBar/TopBar.jsx';
import NavBar from './NavigationBar/NavBar.jsx';
import './TopBar/TopBar.css';
import './NavigationBar/NavBar.css';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <TopBar />
                <NavBar />
            </div>
        );
    }
}

export default Header;
