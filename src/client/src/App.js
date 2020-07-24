
/*
import React from "react";
import "./App.css";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/common/Footer";
*/
import Routes from "../src/components/routes/Routes";


import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
//import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
import store from './redux/store';
import Gallery from './components/catalog/Gallery';


function App() {
  return (
    <div className="App">
    
      <Navbar />

      <Routes />
      <Footer />

 
    </div>
  );
}

export default App;
