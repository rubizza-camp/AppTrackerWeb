// jshint esversion:9
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://apptracker.club/'>
        AppTracker.club
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color='inherit' href='https://rubizza.com/'>
        Rubizza
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '50vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white'
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth='sm'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Button size='small' className={classes.margin}>
                <Typography style={{ fontSize: '0.8rem' }} variant='body1'>
                  Application sources
                </Typography>
              </Button>
            </div>
            <div>
              <Button size='small' className={classes.margin}>
                <Typography style={{ fontSize: '0.8rem' }} variant='body1'>
                  About us
                </Typography>
              </Button>
            </div>
            <div>
              <Button size='small' className={classes.margin}>
                <Typography style={{ fontSize: '0.8rem' }} variant='body1'>
                  Terms of use
                </Typography>
              </Button>
            </div>
            <div>
              <Button size='small' className={classes.margin}>
                <Typography style={{ fontSize: '0.8rem' }} variant='body1'>
                  Confidential politics
                </Typography>
              </Button>
            </div>
          </div>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
