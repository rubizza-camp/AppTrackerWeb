// jshint esversion:9
import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ApplicationView from '../main/ApplicationView';

import AppListSearchItemEmpty from './items/index';
import { AppListSearchItem } from './items/result';
import { searchApplication } from '../../actions/applications';

function startLoadAppInfo(name) {
  axios.get('https://' + 'apptracker.club' + ':3000/api/v1/apps/' + name).then(response => {
    window.globalAppData = response.data;
    var dynamicInfos = [];
    var ratings = [];
    for (var i = 0; i < window.globalAppData.included.length; i++) {
      if (window.globalAppData.included[i].type == 'DynamicInfo')
        dynamicInfos.push(window.globalAppData.included[i].attributes);
      if (window.globalAppData.included[i].type == 'Rating') ratings.push(window.globalAppData.included[i].attributes);
    }

    window.applicationData = response.data.data.attributes;
    window.dynamicInfos = dynamicInfos;
    window.ratings = ratings.sort(function(a, b) {
      if (a.Date > b.Date) {
        return 1;
      }
      if (a.Date < b.Date) {
        return -1;
      }
      return 0;
    });

    console.log(window.dynamicInfos);
    console.log(window.ratings);

    ReactDOM.render(React.createElement(ApplicationView), document.getElementById('root'));
    document.getElementById('root').setAttribute('style', 'margin-top: 20px; display: flex; justify-content: center;');
  });
}

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
