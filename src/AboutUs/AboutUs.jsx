import React, { Component } from 'react';
import style from './AboutUs.module.css';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <h1 className={style.title}>Pet Supply Shopping Website</h1>
                <h2 className={style.subTitle}>Team4 member</h2>
                <div className={style.table}>
                    <p>Ziyao Qiao</p>
                    <p>Jiaxin Liu</p>
                    <p>Xuanyi Zhang</p>
                    <p>Jose Guerrero</p>
                </div>
            </div>
        );
    }
}

export default AboutUs;
