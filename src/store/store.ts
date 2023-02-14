import {configureStore} from '@reduxjs/toolkit';
import userSlice from './reducer/user.slice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
