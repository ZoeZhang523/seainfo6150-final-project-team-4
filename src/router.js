import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Home from './Home/Home.jsx';
import Error from './Error/Error.jsx';
import ItemDetailPage from './itemDetailPage/ItemDetailPage.js';
import ResultList from './searchResult/ResultList.js';

const BasicRoute = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/Item-Detail-Page' component={ItemDetailPage} />
        <Route exact path='/Search-Result' component={ResultList} />
        <Route component={Error} />
    </Switch>
);
export default BasicRoute;
