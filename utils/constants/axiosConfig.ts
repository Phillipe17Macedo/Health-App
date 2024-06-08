import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://apicd.enoki.com.br/api/',
});

export default axiosConfig;
