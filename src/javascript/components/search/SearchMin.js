
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

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
      <div
        style={{ padding: '4px 4px', borderRadius: '50px', overflow: 'hidden', width: '100%' }}
        className='mdc-elevation--z1'
      >
        <Paper
          className='background-op40'
          style={{
            borderRadius: 'none !important',
            boxShadow: 'none',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <IconButton style={{ color: '#9900FF' }} className='material-icons-outlined'>
            search
          </IconButton>
          <InputBase
            autoComplete='off'
            id='MinSearchInputField'
            onChange={onSearchInputChange(setApps, setInputValue)}
            style={{ marginLeft: 8, flex: 1 }}
            placeholder='Search application'
            inputProps={{ 'aria-label': 'Search application' }}
          />
        </Paper>
        <div id='search_field' style={{ maxHeight: '30vh', overflowY: 'scroll', position: 'fixed', zIndex: '10' }}
          className='search-field-min'>
          {inputValue != '' && (apps && <AppsSearchList apps={apps} inputValue={inputValue} />)}
        </div>
      </div>
    </Grid>
  );
};
