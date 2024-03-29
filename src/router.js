import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Home from './Home/Home.jsx';
import Error from './Error/Error.jsx';
import ItemDetailPage from './itemDetailPage/ItemDetailPage.js';
import ResultList from './searchResult/ResultList.js';
import Category from './Category/Category.jsx';
import Cart from './Cart/Cart.jsx';
import OrderPage from './orderPage/OrderPage.jsx';
import Form from './Form/Form.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
const BasicRoute = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/Item-Detail-Page/:Id' component={ItemDetailPage} />
        <Route path='/Search-Result/:keyword' component={ResultList} />
        <Route
            path='/category/:petCategory/:usage?/:detailUsage?'
            component={Category}
        />
        <Route exact path='/Cart' component={Cart} />
        <Route exact path='/OrderPage' component={OrderPage} />
        <Route exact path='/Form' component={Form} />
        <Route exact path='/AboutUs' component={AboutUs} />
        <Route component={Error} />
    </Switch>
);
export default BasicRoute;
