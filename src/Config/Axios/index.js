import axios from 'axios';

const baseUrl = 'https://soal.staging.id';

export default axios.defaults.baseURL = baseUrl;
