import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isActive: true,
  content: 'review'
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.isActive = action.payload
    },
    setContent: (state, action) => {
      state.content = action.payload
    }
  }
})

export const { setContent, setModal } = modalSlice.actions
export default modalSlice.reducer