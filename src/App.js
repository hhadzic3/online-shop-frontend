import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/Navbar'
import Pricing from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <PrimarySearchAppBar/>
        
      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        
        <Pricing></Pricing>
    </div>
      </Router>
  );
}

export default App;
