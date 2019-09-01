import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { URL_APP } from '../../../constants';

function handleClick(id) {
  document.location.href = URL_APP + id;
}

export const AppListSearchItem = ({ id, attributes: { title, icon_url, rating } }) => (
  <ListItem button key={id} className='search-result-list' onClick={() => handleClick(id)}>
    <img src={icon_url} />
    <ListItemText className='ml-10 unhover title' primary={title} />
    <div className='stars'>
      <Rating className='search-stars-color' value={rating} precision={0.05} readOnly />
    </div>
  </ListItem>
);
