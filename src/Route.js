import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";
import Product_ITEM from "./components/Product_ITEM";
import Page_Not_Found from "./components/404";
import Navbar from "./Navbar";


function RouteConfig() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About}  />
          <Route exact path="/product" component={Product} />
          <Route path="/product/:Productid" component={Product_ITEM} />
          <Route path="*" component={Page_Not_Found} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouteConfig;
