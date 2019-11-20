import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import Home from "./Home/Home.jsx";
import Error from "./Error/Error.jsx";
import ItemDetailIndex from "./itemDetailPage/ItemDetailIndex.js";
import SearchResultIndex from "./searchResult/SearchResultIndex.js";
import Cart from "./Cart/Cart.jsx";
import OrderPage from "./orderPage/OrderPage.jsx";

const BasicRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/Item-Detail-Page" component={ItemDetailIndex} />
    <Route exact path="/Search-Result" component={SearchResultIndex} />
    <Route exact path="/Cart" component={Cart} />
    <Route exact path="/OrderPage" component={OrderPage} />
    <Route component={Error} />
  </Switch>
);
export default BasicRoute;
