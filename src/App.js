import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Details from './components/Details';
import Login from './components/Auth/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail" >
            <Details />
          </Route>
          <Route path="/">

            <Home />
          </Route>
        </Switch>

      </Router>
    </div>

  );
}

export default App;
