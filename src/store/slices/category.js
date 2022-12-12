import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryData: null,
  pickedCategories: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = action.payload;
    },
    setPickedCategories: (state, action) => {
      const isPicked = state.pickedCategories.find(
        (item) => item.title === action.payload.title
      );

      if (!isPicked) {
        state.pickedCategories.push(action.payload);
      }
    },
    removePickedCategory: (state, action) => {
      state.pickedCategories = state.pickedCategories.map((item) =>
        item.title === action.payload
          ? { ...item, isActive: !item.isActive }
          : item
      );
    },
    setInitPickedCategories: (state, action) => {
      state.pickedCategories = action.payload;
    },
  },
});

export const {
  setCategoryData,
  setPickedCategories,
  removePickedCategory,
  setInitPickedCategories,
} = categorySlice.actions;
export default categorySlice.reducer;
