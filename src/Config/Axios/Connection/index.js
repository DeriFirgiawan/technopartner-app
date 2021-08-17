import axios from 'axios';

axios.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 401) {
      localStorage.clear();
      throw new Error('Token Expired');
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axios;
