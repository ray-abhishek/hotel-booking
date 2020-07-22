import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <Navbar />
    <Footer />
    </Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
