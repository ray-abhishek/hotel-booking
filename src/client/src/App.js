import React from "react";
import "./App.css";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/common/Footer";
import Routes from "../src/components/routes/Routes";

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
