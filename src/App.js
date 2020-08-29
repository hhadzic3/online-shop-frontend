import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/Navbar/Navbar'
import Pricing from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
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
        <Menu></Menu>
      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
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
