import React from 'react';
import {BrowserRouter as Router,  Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {

  return (
    <Router>
        <div className="App">
      <div className="blankSide"> 
      <h1>You are the Semicolon to my Statements;</h1>
      </div>
      <div className="formSide">
      <div className="switchBtn">
        <NavLink to="/sign-in" activeClassName="switchBtn_Item--Active" className="switchBtn_Item">Sign In</NavLink>
        <NavLink exact to="/" activeClassName="switchBtn_Item--Active" className="switchBtn_Item">Sign Up</NavLink>
      </div>
      <div className="formTitle">
        <NavLink to="/sign-in" activeClassName="formTitle_Link--Active" className="formTitle_Link">Sign-In</NavLink> <span style={{fontSize:"20px"}}> or </span><NavLink exact to="/" activeClassName="formTitle_Link--Active" className="formTitle_Link">Sign-Up</NavLink>
      </div>
          <Route exact path="/" component={SignUp}></Route>
          <Route path="/sign-in" component={SignIn}></Route>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
