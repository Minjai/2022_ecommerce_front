import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  trackingNumber: '',
  conditionId: '',
  singleOrder: [],
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
    setSingleItemOrder: (state, action) => {
      state.singleOrder = action.payload
    }
  },
});

export const {
  setSingleOrder,
  setTrackingNumber,
  setConditionId,
  setSingleItemOrder
} = orderSlice.actions;
export default orderSlice.reducer;
