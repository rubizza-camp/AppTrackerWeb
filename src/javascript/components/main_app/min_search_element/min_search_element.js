// jshint esversion:9
import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import ReactDOM from 'react-dom';
import Rating from '@material-ui/lab/Rating';
import MainAppField from '../../main_app/main_app_field.js';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
        return -1;
      }
      if (a.Date < b.Date) {
        return 1;
      }
      return 0;
    });
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    ReactDOM.render(React.createElement(MainAppField), document.getElementById('root'));
    document.getElementById('root').setAttribute('style', 'margin-top: 20px; display: flex; justify-content: center;');
  });
}

const newPartElement = (element_data, id) => (
  <ListItem
    button
    key={id}
    style={{ borderRadius: '50px', marginLeft: '5px', paddingLeft: '9px', width: 'auto', minWidth: 320 }}
    onClick={() => {
      setTimeout(() => {
        startLoadAppInfo(element_data.attributes.title);
      }, 100);
    }}
  >
    <div
      style={{
        height: '40px',
        width: '40px',
        borderRadius: '100%',
        backgroundImage: "url('" + element_data.attributes.icon_url + "')",
        backgroundSize: 'cover'
      }}
    ></div>
    <ListItemText className='ml-10 unhover' primary={element_data.attributes.title} />
    <div
      style={{
        marginLeft: 'auto'
      }}
    >
      <Rating style={{ color: '#606060' }} value={4.5} readOnly />
    </div>
  </ListItem>
);

class MinSearchEl extends React.Component {
  create_search_result_fields(data) {
    if (data.length != 0) {
      var components = [];
      components.push(
        <Divider
          key='divider'
          style={{ width: '74%', height: 1, marginBottom: '11px', marginLeft: '12%', marginRight: '12%' }}
        />
      );
      for (var i = 0; i < data.length; i++) components.push(newPartElement(data[i], i));
      const newFieldCount = React.createElement(List, { id: 'some', className: 'non-selectable' }, components);
      ReactDOM.render(newFieldCount, document.getElementById('min_search_field'));
    } else {
      ReactDOM.render('', document.getElementById('min_search_field'));
    }
  }

  search_request = event => {
    if (this.searchTimer != undefined) {
      clearTimeout(this.searchTimer);
      this.searchTimer = undefined;
    }

    var target = event.currentTarget;
    if (target.value != '') {
      this.searchTimer = setTimeout(() => {
        // axios.get('https://'+document.domain+':3000/api/v0/packages?name='+target.value)
        axios
          .get('https://' + 'apptracker.club' + ':3000/api/v1/apps?title=' + target.value)
          .then(response => {
            if (document.getElementById('MinSearchInputField').value != '')
              this.create_search_result_fields(response.data.data);
          })
          .catch(error => console.log(error));
      }, 100);
    } else {
      ReactDOM.render('', document.getElementById('min_search_field'));
    }
  };

  render() {
    return (
      <div
        style={{ padding: '4px 4px', borderRadius: '28px', overflow: 'hidden', width: '100%' }}
        className='mdc-elevation--z1'
      >
        <Paper style={{ borderRadius: 'none !important', boxShadow: 'none', display: 'flex', alignItems: 'center' }}>
          <IconButton style={{ color: '#9900FF' }} className='material-icons-outlined'>
            search
          </IconButton>
          <InputBase
            autoComplete='off'
            id='MinSearchInputField'
            onChange={this.search_request}
            style={{ marginLeft: 8, flex: 1 }}
            placeholder='Search application'
            inputProps={{ 'aria-label': 'Search application' }}
          />
        </Paper>

        <div
          id='min_search_field'
          style={{ maxHeight: '30vh', overflowY: 'scroll', position: 'fixed', zIndex: '10' }}
          className='search-field-min'
        ></div>
      </div>
    );
  }
}

export default MinSearchEl;
