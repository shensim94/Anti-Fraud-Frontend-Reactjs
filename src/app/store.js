import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from '../components/usernameSlice'

export default configureStore({
    reducer: {
        username: usernameReducer
    }
})