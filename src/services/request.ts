import axios, { AxiosInstance } from 'axios';

const baseUrlv = 'http://localhost:3000';

const createAxiosInstance = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: baseUrlv,
    responseType: 'json',
    withCredentials: false,
    timeout: 30000,
  });

  return axiosInstance;
};

export default createAxiosInstance;
