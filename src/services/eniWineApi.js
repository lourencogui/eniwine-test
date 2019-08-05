import axios from 'axios';

export const eniWineApi = axios.create({
  baseURL: 'https://boiling-peak-86643.herokuapp.com/',
});
