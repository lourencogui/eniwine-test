import axios from 'axios';

export const eniWineApi = axios.create({
  // baseURL: 'http://www.mocky.io/v2',
  baseURL: 'https://boiling-peak-86643.herokuapp.com/',
});
