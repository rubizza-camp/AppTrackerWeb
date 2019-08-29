// jshint esversion:9
import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import './styles/app.css';
import App from './javascript/App';
import Footer from './javascript/Footer';

render(<App />, document.getElementById('root'));
render(<Footer />, document.getElementById('footer'));
