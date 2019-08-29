import { API_URL } from '../constants';
import axios from 'axios';

export const searchApplication = title =>
  axios
    .get(`${API_URL}apps?title=${title}`)
    .then(response => response.data.data)
    .catch(error => console.log(error));
