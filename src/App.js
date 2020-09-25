import React, { createContext, useState } from 'react';
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipment from './Components/Shipment/Shipment';



export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser]= useState({
    isLoggedIn : false,
    name :'',
    email:'',
    password:'',
    error:'',
    success:false
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>{console.log(loggedInUser.email)}</p>
      <p>email:{loggedInUser.name}</p>
    <Router>
      <Header></Header>
      <Switch>
        <Route path ='/home'>
         <Home></Home>
        </Route>
        <Route path='/booking/:id'>
          <Booking></Booking>
         
        </Route>
        <PrivateRoute path='/details/:key'>
          <SearchBookingDetails></SearchBookingDetails>
        </PrivateRoute>
        <PrivateRoute path='/searchBooking'>
          <SearchBookingDetails></SearchBookingDetails>
        </PrivateRoute>
        <PrivateRoute path='/shipment'>
          <Shipment></Shipment>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path ='/'>
         <Home></Home>
        </Route>

      </Switch>

    </Router>

      </UserContext.Provider>
        
   
  );
}

export default App;

