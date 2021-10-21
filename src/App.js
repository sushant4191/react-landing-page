import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import {Switch} from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import Page1 from './Components/Page1/Page1';
import Page3 from './Components/Page3/Page3';

function App() {
  return (
    <Router>
    <div className="App">
    <section className="section-page">
      <Switch>

        <Route exact path="/">
           <Navbar/>
           <Page1/>
        </Route>
        <Route exact path="/features">
           <Navbar/>
          <Page3/>
        </Route>
      </Switch>
      </section>
    </div>
</Router>
   
  );
}

export default App;

