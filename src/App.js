import React, { Component } from 'react';
import Routes from './Routes';
import Header from './component/Header';
import Inventors from './component/Inventors';
import './App.css';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Inventors />
        <Footer />
      </div>
    );
  }
}

export default App;
