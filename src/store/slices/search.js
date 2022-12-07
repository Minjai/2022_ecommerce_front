import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../constants/axios';

export const getSearchApi = createAsyncThunk(
  'searchSlice/getSearchApi',
  async ({ str }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.get(
        `products/products/?search=${str}`
      );

      dispatch(getSearchValue(str))

      return await response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  searchData: '',
  isLoading: false,
  error: null,
  searchValue: ''
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    getSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {
    [getSearchApi.pending]: (state) => {
      state.isLoading = true
    },
    [getSearchApi.fulfilled]: (state, action) => {
      state.searchData = action.payload;
      state.isLoading = false
    },
    [getSearchApi.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false
    },
  },
});

export const { getSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
