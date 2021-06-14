import React from 'react';
import {
  Switch,
  BrowserRouter,
  Route,
  Redirect,
} from "react-router-dom";
import '../styling/App.css';
import '../styling/home.css';
import Footer from './Footer';
import Header from './Header';
import Home from '../components/Home';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Booking from '../components/Booking';
import Plans from '../components/Plans';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <BrowserRouter>
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
        <Footer />
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
