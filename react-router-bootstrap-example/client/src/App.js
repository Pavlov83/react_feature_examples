
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav'
import Tutorial from './Tutorial'
import Home from './Home'
import SubmitForm from './SubmitForm'
import React,{useState,useEffect} from 'react'

import Axios from 'axios'
import './App.css';


function App() {
  return(
    <Router>
      <Nav />
    <div>
    <Switch>
      <Route path='/' exact component={Home} />
      </Switch>
      <Switch>
      <Route path='/nav' component={Nav} />
      </Switch>
      <Switch>
      <Route path='/submit' component={SubmitForm} />
      </Switch>
      <Switch>
      <Route path='/tutorial' component={Tutorial} />
      </Switch>
    </div>
    </Router>
  )

}




export default App;
