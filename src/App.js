import React, { useState } from 'react';
import Home from '../src/Components/Home/Home'
import Booking from './Components/Booking/Booking';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import SearchBookingDetails from './Components/SearchDetails/SearchBookingDetails';
import Login from './Components/Login/Login';




function App() {

  

  
  

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path ='/home'>
         <Home></Home>
        </Route>
        <Route path='/booking/:id'>
          <Booking></Booking>
        </Route>
        <Route path='/details/:key'>
          <SearchBookingDetails></SearchBookingDetails>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>

      </Switch>

    </Router>

        
        
   
  );
}

export default App;

