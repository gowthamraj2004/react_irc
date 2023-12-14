// import logo from './logo.svg';

import React, { useState, BrowserRouter, Router, Link } from 'react';
import './App.css';
import Login from './components/login/login';
import Register from './components/Register/Register';

const App = () => {
  const [showComponentA, setShowComponentA] = useState(true);
  let[action,setAction]=useState(true);

  const handleButtonClick = () => {
    setShowComponentA(!showComponentA);
    setAction(!action);
  };

  return (
    <div>
      {showComponentA ? <Login/> : <Register/>}
      <button className="btnregi" onClick={handleButtonClick}>{action? "Register" : "Login"}</button>
    </div>
  );
};

export default App;
