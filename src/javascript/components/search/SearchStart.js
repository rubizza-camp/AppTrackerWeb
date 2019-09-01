// jshint esversion:9
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import AppListSearchItemEmpty from './items/index';
import { AppListSearchItem } from './items/result';
import { searchApplication } from '../../actions/applications';

let searchTimer = null;

const onSearchInputChange = (setApps, setInputValue) => ({ currentTarget: { value } }) => {
  setInputValue(value);

  if (!searchTimer) {
    clearTimeout(searchTimer);
    searchTimer = null;
  }

  if (value != '') {
    searchTimer = setTimeout(() => {
      searchApplication(value).then(setApps);
    }, 100);
  } else {
    setApps(null);
  }
};

const AppsSearchList = ({ apps, inputValue }) => (
  <List id='some' className='non-selectable'>
    {apps.length ? (
      apps.map((app, index) => <AppListSearchItem key={index} {...app} />)
    ) : (
        <AppListSearchItemEmpty inputValue={inputValue} />
      )}
  </List>
);

export default props => {
  const [apps, setApps] = useState(null);
  const [inputValue, setInputValue] = useState('');
  return (
    <Grid item xs={12}>
      <div className='main-search-input-div mdc-elevation--z5'>
        <Paper className='main-search-paper'>
          <IconButton className='material-icons-outlined main-search-button-icon'>search</IconButton>
          <InputBase
            className='flex-1 ml-8px'
            autoComplete='off'
            id='MainSearchInputField'
            onChange={onSearchInputChange(setApps, setInputValue)}
            placeholder='Search application'
            inputProps={{ 'aria-label': 'Search application' }}
          />
        </Paper>
        <div id='search_field' className='main-search-input-field'>
          {inputValue != '' && (apps && <AppsSearchList apps={apps} inputValue={inputValue} />)}
        </div>
      </div>
    </Grid>
  );
};
