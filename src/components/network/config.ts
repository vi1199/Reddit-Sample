export const BASE_URL = 'https://www.reddit.com/api/v1/';
export const O_AUTH_URL = 'https://oauth.reddit.com/api/v1/';
export const Config = {
  authLogin: `${BASE_URL}authorize.compact`,
  accessToken: `${BASE_URL}access_token`,
  subReddits: `${O_AUTH_URL}subreddits/new`,
};
