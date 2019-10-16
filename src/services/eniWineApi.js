import axios from 'axios';

export const eniWineApi = axios.create({
  baseURL: 'https://eniwine.herokuapp.com',
  // baseURL: 'http://172.18.103.225:3333/',
});
