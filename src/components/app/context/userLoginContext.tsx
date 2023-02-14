import {createContext} from 'react';

type CurrentUserContextType = {
  loggedIn: false;
};
export const UserLoggedInContext = createContext<
  CurrentUserContextType | boolean
>(null);
