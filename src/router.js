import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Home from './Home/Home.jsx';
import Error from './Error/Error.jsx';

const BasicRoute = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={Error} />
    </Switch>
);
export default BasicRoute;
