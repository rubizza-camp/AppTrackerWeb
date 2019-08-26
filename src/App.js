// jshint esversion:9
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './App.css';
import SearchEl from './main_search_element/search_element.js';

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
