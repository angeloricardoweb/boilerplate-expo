import { API_CONTRACT } from '@constants/index';
import axios from 'axios';

export const api = axios.create({
  baseURL: API_CONTRACT,
});
