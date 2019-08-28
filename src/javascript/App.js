// jshint esversion:9
import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchEl from './components/main_search_element/search_element.js';

class MyApp extends React.Component {
  render() {
    return (
      <>
        <div id='MainSearchEl' className='show_transition flext-center'>
          <SearchEl></SearchEl>
        </div>
      </>
    );
  }
}

export default MyApp;
