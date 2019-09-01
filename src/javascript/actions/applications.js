import { testLoad } from '../lib/plotDataParser';

import { API_URL, API_APP } from '../constants';
import axios from 'axios';

export const searchApplication = title =>
  axios
    .get(`${API_URL}apps?title=${title}`)
    .then(response => response.data.data)
    .catch(error => console.log(error));

export const loadApplication = id =>
  axios
    .get(`${API_APP}${id}`)
    .then(response => { testLoad(response); return response.data })
    .catch(error => console.log(error));
