import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isActive: false
}

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    setActiveBurger: (state, action) => {
      state.isActive = action.payload
    }
  }
})

export const { setActiveBurger } = burgerSlice.actions
export default burgerSlice.reducer