import axios from 'axios';

import { BrowserStorageKeys, BrowserStorageService } from 'services';

import { baseUrl } from './constants';

export const client = axios.create({
  baseURL: baseUrl,
});

client.interceptors.request.use((config: any) => {
  const token =
    BrowserStorageService.get(BrowserStorageKeys.AccessToken) ||
    BrowserStorageService.get(BrowserStorageKeys.AccessToken, { session: true });

  if (token) {
    config.headers = Object.assign(
      {
        Authorization: `Bearer ${JSON.parse(token)} `,
      },
      config.headers,
    );
  }

  return config;
});
