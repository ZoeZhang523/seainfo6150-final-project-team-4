import React from 'react';
import style from './Error.module.css';

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
            </div>
        </div>
    );
};

export default Error;
