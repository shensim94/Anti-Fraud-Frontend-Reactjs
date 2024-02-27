import { createSlice } from '@reduxjs/toolkit'

export const usernameSlice = createSlice({
  name: 'username',
  initialState: {
    value: "Hello, World!"
  },
  reducers: {
    setAppUsername: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setAppUsername } = usernameSlice.actions

export default usernameSlice.reducer