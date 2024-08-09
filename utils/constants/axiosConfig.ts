import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://apicd.enoki.com.br/api/v1/',
});

export default axiosConfig;
