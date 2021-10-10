import React, { Component } from 'react';

import { Route , Switch , Redirect } from 'react-router-dom';
import NoteFoundError from "./components/NoteFoundError";

import LandingPage from "./components/LandingPage";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from "./components/Products";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <Switch>
            <Route path="/Products" component={Products} />
            <Route path="/NoteFoundError" component={NoteFoundError} />
            <Route exact path="/" component={LandingPage} />
            <Redirect to="/NoteFoundError" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
