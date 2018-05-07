import axios from 'axios';
import { API_URL } from './api';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

export default instance;