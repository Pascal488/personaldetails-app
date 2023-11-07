import { createSlice } from "@reduxjs/toolkit"



const initialState = {
       user: {
              username: "name",
              email: "name@gmail.com",
              token:"kkjgdshg"
       },
}

export const authSlice = createSlice({
       name: "authslice",
       initialState,
       reducers: {
              addUserDetails: (state, action) => {
                     const userDetails = {
                            user:action.payload
                     }
                     state.user = userDetails.user
                    
              },
              
              
       }
})


export const { addUserDetails } = authSlice.actions

export default authSlice.reducer