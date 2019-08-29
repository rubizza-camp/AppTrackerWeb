// jshint esversion:9
import React from 'react';
import SearchStart from './components/search/SearchStart';
import ApplicationView from './components/main/ApplicationView';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route path='/' component={SearchStart} />
          <Route path='apps/:id' component={ApplicationView} />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
