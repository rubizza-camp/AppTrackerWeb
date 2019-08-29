// jshint esversion:9
import React from 'react';
import SearchStart from './components/search/SearchStart';

class App extends React.Component {
  render() {
    return (
      <>
        <div id='MainSearchEl' className='show_transition flext-center'>
          <SearchStart></SearchStart>
        </div>
      </>
    );
  }
}

export default App;
