import { API_CONTRACT } from '@constants/index';
import axios from 'axios';
import { getToken } from '@storage/token';

export const api = axios.create({
  baseURL: API_CONTRACT,
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken();

      if (token) {
        config.headers.Authorization = `${token}`;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
