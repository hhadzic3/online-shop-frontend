import React from 'react';
import './App.scss';
import PrimarySearchAppBar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Privacy from './components/About/Privacy';
import Tearms from './components/About/Terms';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Detail from './components/Detail/Detail';
import HeaderBar from './components/HeaderBar/HeaderBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        <PrimarySearchAppBar/>
      
        <Switch>
          <Route path="/detail/:id" component={Detail}>
            
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Tearms />
          </Route>
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
        
        <Footer/>
        
        </div>
      </Router>
  );
}

export default App;
