import React, { Component } from 'react';
import ShippingInfo from './ShippingInfo';
import PaymentInfo from './PaymentInfo';
import Summary from '../components-cart/Summary';
import style from './OrderPage.module.css';
import ActionButton from './ActionButton';
import { Link } from 'react-router-dom';
export class OrderPage extends Component {
    render() {
        return (
            <div className={style.container}>
                <div>
                    <ShippingInfo />
                    <PaymentInfo />
                </div>
                <div>
                    <Summary total={100.5} />
                    <Link to='/'>
                        <ActionButton title={'Submit Payment'} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default OrderPage;
