import * as Keychain from 'react-native-keychain';
import {getAccessToken} from '../login/actions/userLogin';
import {Config} from './config';

const AccessToken = async () => {
  let st;
  try {
    let value = await getAccessToken();
    if (value) {
      st = value;
      //  return value;
    }
  } catch {}
  console.log('--123444--', st);
  return st;
};
export const call = (method, url, body = {}) => {
  return new Promise(async (resolve, reject) => {
    let accessToken = await getAccessToken();
    let customHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    // if (accessToken) {
    //   customHeaders['Authorization'] = `bearer ${accessToken}`;
    // }
    console.log('--url--', url);
    console.log('--headers--', customHeaders);

    if (method === 'post') {
      fetch(url, {
        method: 'post',
        headers: customHeaders,
      })
        .then(response => response.json())
        .then(res => {
          console.log('--resp--', res);
          resolve(res);
        })
        .catch(error => {
          console.log('--resp-error-', error);
          console.error(error);
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
          console.log('--resp--', res);
          resolve(res);
        })
        .catch(error => {
          console.log('--resp-error-', error);
          console.error(error);
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
