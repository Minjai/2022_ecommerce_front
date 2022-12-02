import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  isAuth: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setUserInfo, setAuth } = userSlice.actions;
export default userSlice.reducer;
