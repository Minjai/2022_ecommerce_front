import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  trackingNumber: '',
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setSingleOrder: (state, action) => {
      state.data = {
        ...action.payload,
        order_items: action.payload.order_items.map((item) => ({
          ...item,
          ...item.info,
        })),
      };
    },
    setTrackingNumber: (state, action) => {
      state.trackingNumber = action;
    },
  },
});

export const { setSingleOrder, setTrackingNumber } = orderSlice.actions;
export default orderSlice.reducer;
