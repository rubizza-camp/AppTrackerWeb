// jshint esversion:9
import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import App from './javascript/App';
import StickyFooter from './javascript/Footer';

render(<App />, document.getElementById('root'));
render(<StickyFooter />, document.getElementById('footer'));
