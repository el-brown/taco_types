import React, { Fragment } from 'react';
import {Route,} from 'react-router-dom';
import AppTacos from './AppTacos';
import About from './About';
import NavBar from './components/NavBar';

const App = () => (
  <Fragment>
    <NavBar />
  <Route exact path="/" component={AppTacos} />
  <Route exact path="/about" component={About} />
  </Fragment>
);

export default App;