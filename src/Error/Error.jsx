import React from 'react';
import style from './Error.module.css';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className={style.error}>
            <img
                className={style.image}
                src='/images/banner_1.jpg'
                alt='error'
            />
            <div className={style.navigator}>
                <p className={style.message}>
                    Oops!
                    <br />
                    You entered a wrong page!
                </p>
                <Link to='/' className={style.nav}>
                    Back to Homepage
                </Link>
            </div>
        </div>
    );
};

export default Error;
