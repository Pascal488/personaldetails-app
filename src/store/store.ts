import { configureStore } from "@reduxjs/toolkit"
import AuthReducers from "../features/auth/authSlice"

export const store = configureStore({
       reducer: {
              AuthReducers
       }
});