import axios from 'axios';
import { baseUrl } from '../data/is-prod';

export const apiClient = axios.create({
  baseURL: baseUrl,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});
