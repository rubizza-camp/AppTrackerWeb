import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadApplication } from '../../actions/applications';
import SearchMin from '../search/SearchMin';
import HorizontalTabs from '../main/Tabs';
import AppTrackerTitleColored from '../icons/AppTrackerTitleColored';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function ApplicationView({
  match: {
    params: { id }
  }
}) {
  const [appId, setAppId] = React.useState(id);
  const [appData, setAppData] = React.useState(null);
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const loadApplicationData = props => {
    loadApplication(appId).then(setAppData);
  };

  return (
    <Grid container className='ApplicationView'>
      <Grid item xs={12} >
        <Grid container justify='center' spacing={spacing}>
          {appData === null ? (
            <div className='progress-full' onLoad={loadApplicationData()}>
              <CircularProgress size={68} className={classes.progress} color='secondary' />
            </div>
          ) : appData === undefined ? (
            (document.location.href = '/')
          ) : (
                <>
                  <Grid item xs={12} sm={4} className='flext-center'>
                    <AppTrackerTitleColored style={{ width: '80%', maxWidth: '250px', minWidth: '180px ' }} />
                  </Grid>
                  <Grid item xs={12} sm={8} className='flext-center'>
                    <SearchMin />
                  </Grid>
                  <HorizontalTabs {...appData} />
                </>
              )}
        </Grid>
      </Grid>
    </Grid>
  );
}
