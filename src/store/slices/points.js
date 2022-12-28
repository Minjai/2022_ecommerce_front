const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  points: 0,
  staticPoints: 0,
};

const pointSlice = createSlice({
  name: 'pointSlice',
  initialState,
  reducers: {
    setPoints: (state, action) => {
      state.points = +state.points + +action.payload;
    },
    setDiscountPoints: (state, action) => {
      state.points = action.payload;
    },
    setStaticPoints: (state, action) => {
      state.staticPoints = action.payload;
    },
    decrementStatisPoints: (state, action) => {
      state.staticPoints = state.staticPoints - action.payload;
    },
  },
});

export const {
  setPoints,
  setStaticPoints,
  decrementStatisPoints,
  setDiscountPoints,
} = pointSlice.actions;
export default pointSlice.reducer;
