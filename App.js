import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home'
// import ContactUs from './containers/ContactUs'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Home />
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
