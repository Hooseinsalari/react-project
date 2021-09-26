import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Search from './components/Search';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
