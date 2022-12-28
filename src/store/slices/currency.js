const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  activeCurrency: ''
};

const currencySlice = createSlice({
  name: 'currencySlice',
  initialState,
  reducers: {
    initCurrency: (state, action) => {
      state.activeCurrency = action.payload;
    },
  },
});

export const { initCurrency } = currencySlice.actions;
export default currencySlice.reducer;
