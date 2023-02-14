import {getAccessToken} from '../login/actions/userLogin';
import {Config} from './config';

export const call = (method, url, body = {}) => {
  return new Promise(async (resolve, reject) => {
    const accessToken = await getAccessToken();
    const customHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
    if (method === 'post') {
      fetch(url, {
        method: 'post',
        headers: customHeaders,
      })
        .then(response => response.json())
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    }
    if (method === 'get') {
      fetch(url, {
        method: 'get',
        headers: customHeaders,
      })
        .then(response => response.json())
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    }
  });
};

export const Network = {
  getAccessToken: obj => {
    return call('post', Config.accessToken, obj);
  },
  getUserSubreddits: () => {
    return call('get', Config.subReddits);
  },
};
