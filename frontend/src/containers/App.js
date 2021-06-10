import React from 'react';
// import {
//   Switch,
//   BrowserRouter,
//   Route,
//   Redirect,
// } from "react-router-dom";
import '../styling/App.css';
import '../styling/home.css';
import Footer from './Footer';
import Header from './Header';
import Home from '../components/Home';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App;
