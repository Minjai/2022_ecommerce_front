const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  data: [],
};

const consultationSlice = createSlice({
  name: 'consultationSlice',
  initialState,
  reducers: {
    initConsultation: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { initConsultation } = consultationSlice.actions;
export default consultationSlice.reducer;
