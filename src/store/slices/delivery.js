const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  data: null
};

const deliverySlice = createSlice({
  name: 'deliverySlice',
  initialState,
  reducers: {
    setDelivery: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDelivery } = deliverySlice.actions;
export default deliverySlice.reducer;
