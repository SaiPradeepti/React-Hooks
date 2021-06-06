import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
import Products from './Products'
import ProductDetails from './ProductDetails'
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router> {/* Entire App has to be enclosed in router tag */}
      <Navbar /> {/* Navbar will show for all pages */}
      <Switch> {/* redirects to the page selected depending on the route */}
        <Route exact path='/'> 
        {/* path / matches with /about too so exact keyword is required to display Home only when exact path is matched */}
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/people'>
          <People />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/product/:id' children={<ProductDetails />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
