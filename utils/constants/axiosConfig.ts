import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apicd.enoki.com.br/api/',
});

export default api;
