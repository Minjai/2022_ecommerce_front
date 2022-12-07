import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setSingleOrder: (state, action) => {
      state.data = {...action.payload, order_items: action.payload.order_items.map(item => ({
        ...item,
        ...item.info
      }))};
    },
  },
});

export const { setSingleOrder } = orderSlice.actions;
export default orderSlice.reducer;
