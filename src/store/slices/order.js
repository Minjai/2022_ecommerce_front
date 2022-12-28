import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  trackingNumber: '',
  conditionId: '',
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
    setConditionId: (state, action) => {
      state.conditionId = action.payload;
    },
  },
});

export const {
  setSingleOrder,
  setTrackingNumber,
  setConditionId,
} = orderSlice.actions;
export default orderSlice.reducer;
