import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router> {/* Entire App has to be enclosed in router tag */}
      <Navbar /> {/* Navbar will show for all pages */}
      <Switch> {/* redirects to the page selected depending on the route */}
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
