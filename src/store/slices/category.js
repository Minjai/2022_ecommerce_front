import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryData: null,
  pickedCategories: [],
  categoryId: '',
  popularCategories: [],
  popularId: '',
  recommendedCategories: [],
  recommendedId: '',  
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
        state.pickedCategories.push({...action.payload, isActive: false});
      }
    },
    removePickedCategory: (state, action) => {
      state.pickedCategories = state.pickedCategories.map((item) =>
        item.title === action.payload.title
          ? { ...item, isActive: !item.isActive }
          : { ...item, isActive: false }
      );

      const isEmpty = state.pickedCategories.find((item) => item.isActive);

      if (isEmpty) {
        state.categoryId =
          action.payload.id !== state.categoryId ? action.payload.id : state.categoryId;
      } else {
        state.categoryId = '';
      }
    },
    setInitPickedCategories: (state, action) => {
      state.pickedCategories = action.payload;
    },
    //
    setInitPopularCategories: (state, action) => {
      state.popularCategories = action.payload;
    },
    removePopularCategory: (state, action) => {
      state.popularCategories = state.popularCategories.map((item) =>
        item.title === action.payload.title
          ? { ...item, isActive: !item.isActive }
          : { ...item, isActive: false }
      );

      const isEmpty = state.popularCategories.find((item) => item.isActive);

      if (isEmpty) {
        state.popularId =
          action.payload.id !== state.popularId ? action.payload.id : state.popularId;
      } else {
        state.popularId = '';
      }
    },
    //
    setInitRecommendedCategories: (state, action) => {
      state.recommendedCategories = action.payload;
    },
    removeRecommendedCategory: (state, action) => {
      state.recommendedCategories = state.recommendedCategories.map((item) =>
        item.title === action.payload.title
          ? { ...item, isActive: !item.isActive }
          : { ...item, isActive: false }
      );

      const isEmpty = state.recommendedCategories.find((item) => item.isActive);

      if (isEmpty) {
        state.recommendedId =
          action.payload.id !== state.recommendedId ? action.payload.id : state.recommendedId;
      } else {
        state.recommendedId = '';
      }
    },
  },
});

export const {
  setCategoryData,
  setPickedCategories,
  removePickedCategory,
  setInitPickedCategories,
  setInitPopularCategories,
  removePopularCategory,
  removeRecommendedCategory,
  setInitRecommendedCategories
} = categorySlice.actions;
export default categorySlice.reducer;
