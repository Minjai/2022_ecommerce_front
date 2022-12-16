import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularProducts: [],
  recommendedProducts: [],
  categoryProducts: [],
};

const productSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    setPopularProducts: (state, action) => {
      state.popularProducts = action.payload;
    },
    setRecommendedProducts: (state, action) => {
      state.recommendedProducts = action.payload;
    },
    setCategoryProducts: (state, action) => {
      state.categoryProducts = action.payload;
    },
  },
});

export const {
  setPopularProducts,
  setRecommendedProducts,
  setCategoryProducts,
} = productSlice.actions;
export default productSlice.reducer;
