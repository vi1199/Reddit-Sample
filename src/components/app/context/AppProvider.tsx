import {getAccessToken} from '@src/components/login/actions/userLogin';
import {useAppDispatch, useAppSelector} from '@src/store/hooks';
import {
  setLoginStatus,
  setUserAccessToken,
} from '@src/store/reducer/user.slice';
import React, {ReactNode, useState} from 'react';
import {UserLoggedInContext} from './userLoginContext';

type Props = {
  children?: ReactNode;
};
export const AppProvider = ({children}: Props) => {
  const dispatch = useAppDispatch();
  const [loginStatus, setUserLoginStatus] = useState(false);
  getAccessToken().then(res => {
    if (res) {
      setUserLoginStatus(true);
      dispatch(setUserAccessToken(res));
      dispatch(setLoginStatus(true));
    }
  });

  return (
    <UserLoggedInContext.Provider value={loginStatus}>
      {children}
    </UserLoggedInContext.Provider>
  );
};
