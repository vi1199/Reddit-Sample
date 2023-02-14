import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPosts} from '@src/components/home/actions/posts';

type PostState = {
  status: string;
  subreddits: object;
};
const initialState: PostState = {
  status: 'idle',
  subreddits: {},
};
export const postsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.status = 'loading';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.subreddits = action.payload;
        state.status = 'idle';
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.subreddits = initialState;
        state.status = 'error';
      });
  },
});

export default postsSlice.reducer;
