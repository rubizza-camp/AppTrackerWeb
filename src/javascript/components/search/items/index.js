import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));

export default ({ inputValue }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleButtonClick() {
    console.log(inputValue);
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  }

  return (
    <Grid container>
      <Grid item xs={6} className='p-10px flext-center f-start'>
        <Typography variant='body1'> • No matches finded </Typography>
      </Grid>
      <Grid item xs={6} className='flext-center f-end'>
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <Fab
              size='small'
              variant='extended'
              color='primary'
              className='no-wrap-text'
              disabled={loading}
              onClick={handleButtonClick}
              aria-label='delete'
            >
              <NavigationIcon className={classes.extendedIcon} />
              {`TRY INDEX ${inputValue}`}
            </Fab>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
