import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  shippings: []
}

const shippingSlice = createSlice({
  name: 'shippingSlice',
  initialState,
  reducers: {
    setShippingPrice: (state, action) => {
      state.shippings.push(action.payload)
    }
  }
})

export const { setShippingPrice } = shippingSlice.actions
export default shippingSlice.reducer