import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
  Redirect,
} from "react-router-dom";
import '../styling/App.css';
import '../styling/home.css';
import '../styling/services.css';
import '../styling/Contact.css';
import '../styling/Booking.css';

import Footer from './Footer';
import Header from './Header';
import Home from '../components/Home';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Booking from '../components/Booking';
import Plans from '../components/Plans';

class App extends React.Component {
  render() {
    return(
        <BrowserRouter>
         <div className='App'>
        <Header />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/services'>
            <Services />
          </Route>

          <Route exact path='/gallery'>
            <Gallery />
          </Route>

          <Route exact path='/contacts'>
            <Contact />
          </Route>

          <Route exact path='/booking'>
            <Booking />
          </Route>

          <Route exact path='/plans'>
            <Plans />
          </Route>

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
        {/* <Footer /> */}
        <Footer />
        </div>
        </BrowserRouter>
    )
  }
}

export default App;
