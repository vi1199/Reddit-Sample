import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type UserState = {
  loggedIn: boolean;
  accessToken: string;
};
const initialState: UserState = {
  loggedIn: false,
  accessToken: '',
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginStatus: (state: UserState, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setUserAccessToken: (state: UserState, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});
export const {setLoginStatus, setUserAccessToken} = userSlice.actions;
export default userSlice.reducer;
