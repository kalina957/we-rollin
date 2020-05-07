import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import firebase from './firebase';

import GMap from './Pages/GMap';
import Profile from './Pages/Profile';
import {NoMatch} from './Pages/NoMatch';
import {Community} from './Pages/Community';
import {Events} from './Pages/Events';
import {Chat} from './Pages/Chat';
import {Layout} from './components/Layout';


import {AddEvent} from './Pages/AddEvent';
import {NavigationBar} from './components/NavigationBar';
import { render } from '@testing-library/react';


class App extends Component {
  render(){
  return (
    <React.Fragment>
       <Layout> 
      <Router>
        <Switch>
        <Route exact path="/" component={GMap}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/events" component={Events}/>
          <Route exact path="/chat" component={Chat}/>  
          <Route exact path="/community" component={Community}/>
          <Route exact path="/addEvent" component={AddEvent}/>
          <Route component={NoMatch}/>
          </Switch>
        </Router>
         </Layout> 
         <NavigationBar/> 
         {/* at the bottom of the page */}

      </React.Fragment>);}}

export  default App;