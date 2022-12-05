const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  carts: []
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.carts.push(action.payload)
    },
    deleteCart: (state, action) => {
      state.carts = state.carts.filter(cart => cart.id !== action.payload)
    },
    initCart: (state, action) => {
      state.carts = action.payload
    }
  }
})

export const { addCart, deleteCart, initCart } = cartSlice.actions
export default cartSlice.reducer