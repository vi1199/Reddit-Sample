import {Config} from '@src/components/network/config';

export const Constants = {
  SIGN_IN_BUTTON: 'Sign in',
  SIGN_IN_WITH_REDDIT: 'Sign in with your Reddit account',
};
export const NavScreens = {
  LOGIN_MODAL: 'WebView',
  POSTS: 'Posts',
};
export const clientId = 'oy-7gOc8oTq8ypXlT332Hg';
export const scopes = [
  'identity',
  'read',
  'history',
  'subscribe',
  'mysubreddits',
];
export const redirectUri = 'com.truckxreddit://reddit/red';

export const userAuthUrl = `${
  Config.authLogin +
  '?client_id=' +
  clientId +
  '&response_type=token&state=random&redirect_uri=' +
  redirectUri +
  '&scope=' +
  scopes
}`;
