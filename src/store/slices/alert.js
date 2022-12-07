const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isAlert: false,
  content: '',
};

const alertSlice = createSlice({
  name: 'alertSlice',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.isAlert = action.payload;
    },
    setAlertContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setAlert, setAlertContent } = alertSlice.actions;
export default alertSlice.reducer;
