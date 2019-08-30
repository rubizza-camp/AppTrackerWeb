import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

export default function ApplicationView({ match }) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  return (
    <Grid container className={classes.root} spacing={2} style={{ width: '90vw', maxWidth: '900px' }}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={spacing}>
          <Grid item xs={12} sm={4} className='flext-center'>
            <AppTrackerTitleColored
              style={{ width: '80%', maxWidth: '250px', minWidth: '180px ' }}
            ></AppTrackerTitleColored>
          </Grid>
          <Grid item xs={12} sm={8} className='flext-center'>
            <SearchMin></SearchMin>
          </Grid>
          <HorizontalTabs></HorizontalTabs>
        </Grid>
      </Grid>
    </Grid>
  );
}
