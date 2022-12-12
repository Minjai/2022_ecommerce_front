import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pickedReview: {}
};

const reviewSlice = createSlice({
  name: 'reviewSlice',
  initialState,
  reducers: {
    setPickedReview: (state, action) => {
      state.pickedReview = action.payload
    },
  },
});

export const { setPickedReview } = reviewSlice.actions;
export default reviewSlice.reducer;
