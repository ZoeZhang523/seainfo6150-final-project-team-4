import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Header from './Public/Header.jsx';
import Footer from './Public/Footer.jsx';

function App() {
  
  return (
    <Router>
      <header>

      <div className = "header">
      <Header />
    </div> 

      </header>
      <Footer />
      <Login />
      <Register />
    </Router>
  );
}

export default App;
