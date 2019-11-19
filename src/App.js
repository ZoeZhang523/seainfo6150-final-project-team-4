import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './PublicComponents/Header/Header.jsx';
import Footer from './PublicComponents/Footer/Footer.jsx';
import BasicRouter from './router';

function App() {
    return (
        <BrowserRouter>
            <header>
                <div className='header'>
                    <Header />
                </div>
            </header>
            <BasicRouter />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
