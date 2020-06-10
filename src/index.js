import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.css';
import Header from '../src/components/header';
import Homepage from '../src/components/homepage';
import SearchJoke from '../src/components/searchJoke'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Switch>
        <Route path="/searchJoke">
          <SearchJoke />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
