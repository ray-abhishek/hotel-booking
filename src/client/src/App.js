/*
import React from "react";
import "./App.css";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/common/Footer";
*/
import Routes from "./components/routes/Routes";

import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
//import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
import store from "./redux/store";
import Gallery from "./components/catalog/Gallery";
import LandingPage from "./pages/LandingPage";
import ReactGA from "react-ga";
ReactGA.initialize("UA-97383215-6");
ReactGA.pageview(window.location.pathname + window.location.search);

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
