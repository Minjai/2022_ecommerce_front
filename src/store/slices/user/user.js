import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {},
  isAuth: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setUserInfo, setAuth } = userSlice.actions;
export default userSlice.reducer;
