import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import Tacos from './components/Tacos';
import About from './About';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';

const App = () => (
  <>
    <NavBar />
    <div className="App">
    <Switch>
      <Route exact path="/" component={Tacos} />
      <Route exact path="/about" component={About} />
      <Route exact path="/:id/reviews" component={Reviews} />
  </Switch>
    </div>
  </>
);

export default App;