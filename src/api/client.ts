import axios from 'axios';

import { baseUrl } from './constants';

export const client = axios.create({
  baseURL: baseUrl,
});
