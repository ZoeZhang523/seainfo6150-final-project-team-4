import React from 'react';
import {Router, Route, Switch, HashRouter, hashHistory} from 'react-router-dom';

import App from './App.js';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx'


const BasicRoute = () => (
    <HashRouter history={hashHistory}>
        <Switch>
            <Route render={ () => <App /> } />
            <Route exact path="/" component={App}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    </HashRouter>
);
export default BasicRoute/*[
    {title: 'Cat', 
    icon: 'icon-home', 
    routes:[
      {name: 'Cat Foods', 
      path: '/cat/foods', 
      component: 'CatFoods'},
      {name: 'Cat Toys', 
      path: '/cat/toys', 
      component: 'CatToys'},
      {name: 'Cat Beds', 
      path: '/cat/beds', 
      component: 'CatBeds'},
    ]},
    {title: 'Dog', 
    icon: 'icon-home', 
    routes:[
      {name: 'Dog Foods', 
      path: '/dog/foods', 
      component: 'DogFoods'},
      {name: 'Dog Toys', 
      path: '/dog/toys', 
      component: 'DogToys'},
      {name: 'Dog Beds', 
      path: '/dog/beds', 
      component: 'DogBeds'},
    ]},
]*/