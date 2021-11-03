import axios from 'axios';

const token = '2bdd2ygcm4ma510igkoy8drgtgy6qd4mowmgqkc8';

const instance = axios.create({
  baseURL: 'https://api.json-generator.com',
  timeout: 5000,
  headers: { Authorization: `Bearer ${token}` },
});

export default instance;
