import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ContactForm from './components/contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ContactForm}/>
      </Router>
    </div>
  );
}

export default App;
