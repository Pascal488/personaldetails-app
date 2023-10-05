import { createSlice } from "@reduxjs/toolkit"


const initialState = {
       user: {
              username: "Name",
              email: "name@gmail.com",
              token:"hehtjehjtehjtet"
       },
}

export const authSlice = createSlice({
       name: "authslice",
       initialState:initialState,
       reducers: {
              getUserDetails: (state, action) => {
                     console.log(state.user)
              }
       }
})


export const { getUserDetails } = authSlice.actions

export default authSlice.reducer