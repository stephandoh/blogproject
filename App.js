import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import ContactUs from './containers/ContactUs';
import AboutUs from './containers/AboutUs';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
  
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path='/' exact component={Home}/>
        <Route path='/contact-us' component={ContactUs}/>
        <Route path='/about-us' component={AboutUs}/>
        

    </div>
    </Router>
    
     
  );
}

export default App;
