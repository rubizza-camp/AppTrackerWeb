// jshint esversion:9
import React from 'react';
import Typography from '@material-ui/core/Typography';
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

export default function Footer() {
  return (
    <div className='footer-root'>
      <footer className='footer-content'>
        <Container maxWidth='sm'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Button size='small'>
                <Typography className='footer-button-text' variant='body1'>
                  Application sources
                </Typography>
              </Button>
            </div>
            <div>
              <Button size='small'>
                <Typography className='footer-button-text' variant='body1'>
                  About us
                </Typography>
              </Button>
            </div>
            <div>
              <Button size='small'>
                <Typography className='footer-button-text' variant='body1'>
                  Terms of use
                </Typography>
              </Button>
            </div>
            <div>
              <Button size='small'>
                <Typography className='footer-button-text' variant='body1'>
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
