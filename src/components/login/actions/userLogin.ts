import {ThunkDispatch, AnyAction, Dispatch} from '@reduxjs/toolkit';
import {
  setLoginStatus,
  setUserAccessToken,
} from '@src/store/reducer/user.slice';
import {redirectUri} from '@src/utils/constants';
import * as Keychain from 'react-native-keychain';

type GetSecureValue = () => Promise<string | false>;

export const setAccessToken = async (
  token: string,
  dispatch: ThunkDispatch<
    {user: {loggedIn: boolean; accessToken: string}},
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>,
) => {
  await Keychain.setGenericPassword('access_token', token, {
    service: 'access_token',
  });
  dispatch(setUserAccessToken(token));
  dispatch(setLoginStatus(true));
  console.log('token-', token);
};

export const getAccessToken: GetSecureValue = async () => {
  const key = 'access_token';
  const result = await Keychain.getGenericPassword({service: key});
  if (result) {
    return result.password;
  }
  return false;
};
