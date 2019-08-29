// jshint esversion:9
import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ApplicationView from '../main/ApplicationView';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppTrackerTitleColored from '../icons/AppTrackerTitleColored';
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

const AppListSearchItem = ({ id, attributes: { title, icon_url } }) => (
  <ListItem button key={id} style={{ borderRadius: '50px', marginLeft: '5px', paddingLeft: '9px', width: 'auto' }}>
    <img
      style={{
        height: '40px',
        width: '40px',
        borderRadius: '100%'
      }}
      src={icon_url}
    />

    <ListItemText className='ml-10 unhover' primary={title} />

    <div
      style={{
        marginLeft: 'auto'
      }}
    >
      <Rating style={{ color: '#606060' }} value={4.5} readOnly />
    </div>
  </ListItem>
);

let searchTimer = null;

const onSearchInputChange = setApps => ({ currentTarget: { value } }) => {
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

const AppsSearchList = ({ apps }) => (
  <List id='some' className='non-selectable'>
    {apps.length ? (
      apps.map(app => <AppListSearchItem {...app} />)
    ) : (
      <ListItem>
        <ListItemText className='ml-10 unhover' primary='Empty' />
      </ListItem>
    )}
  </List>
);

export default props => {
  const [apps, setApps] = useState(null);
  return (
    <div id='MainSearchEl' className='show_transition flext-center'>
      <Grid container style={{ width: '98vw', maxWidth: '600px', marginTop: '25vh' }}>
        <Grid item xs={12} className='flext-center'>
          <AppTrackerTitleColored style={{ minWidth: '250px', width: '50%', padding: '15px' }}></AppTrackerTitleColored>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              padding: '4px 4px',
              borderRadius: '28px',
              overflow: 'hidden',
              backgroundColor: 'rgba(255,255,255,1)'
            }}
            className='mdc-elevation--z5'
          >
            <Paper
              style={{ borderRadius: 'none !important', boxShadow: 'none', display: 'flex', alignItems: 'center' }}
            >
              <IconButton style={{ color: '#9900FF' }} className='material-icons-outlined'>
                search
              </IconButton>
              <InputBase
                autoComplete='off'
                id='MainSearchInputField'
                onChange={onSearchInputChange(setApps)}
                style={{ marginLeft: 8, flex: 1 }}
                placeholder='Search application'
                inputProps={{ 'aria-label': 'Search application' }}
              />
            </Paper>
            <div id='search_field' style={{ maxHeight: '30vh', overflowY: 'scroll', overflowX: 'hidden' }}>
              {apps && <AppsSearchList apps={apps} />}
            </div>
          </div>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} style={{ marginTop: 100 }}>
          <CssBaseline />
          <Container component='main' maxWidth='sm'>
            <Typography variant='h4' component='h1' gutterBottom style={{ fontWeight: 200 }}>
              Welcome
            </Typography>
            <Typography variant='h5' component='h2' gutterBottom style={{ fontWeight: 200 }}>
              {'to your truly tool for tracking application development history.'}
            </Typography>
            <Typography variant='body1'>Successful discoveries!</Typography>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};
