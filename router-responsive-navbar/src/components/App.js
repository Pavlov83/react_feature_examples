import React from 'react'
import Home from './Categories/Home'
import Navbar from './Navbar/Navbar'
import About from './Categories/About';
import Projects from './Categories/Projects'
import Tutorials from './Categories/Tutorials'
import './App.css';



import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Switch>
        <Route path='/' exact components={Home} />
        <Route path ='/about' component={About} />
        <Route path ='/tutorials' component={Tutorials} />
        <Route path ='/projects' component={Projects} />
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
