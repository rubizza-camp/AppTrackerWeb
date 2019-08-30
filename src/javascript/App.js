// jshint esversion:9
import React from 'react';
import SearchStart from './components/search/SearchStart';
import ApplicationView from './components/main/ApplicationView';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppTrackerTitleColored from './components/icons/AppTrackerTitleColored';
import Grid from '@material-ui/core/Grid';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';

class StartPage extends React.Component {
  render() {
    return (
      <div id='MainSearchEl' className='show_transition flext-center'>
        <Grid container className='main-search-element'>
          <Grid item xs={12} className='flext-center'>
            <AppTrackerTitleColored className='app-tracker-main-svg' />
          </Grid>
          <SearchStart></SearchStart>
          <Grid item xs={12} className='mt-100px'>
            <CssBaseline />
            <Container component='main' maxWidth='sm'>
              <Typography variant='h4' component='h1' gutterBottom className='fw-200'>
                Welcome
              </Typography>
              <Typography variant='h5' component='h2' gutterBottom className='fw-200'>
                {'to your truly tool for tracking application development history.'}
              </Typography>
              <Typography variant='body1'>Successful discoveries!</Typography>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route path='/' component={StartPage} />
          <Route path='/apps/:id' component={ApplicationView} />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
