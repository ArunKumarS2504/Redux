import { createSlice } from "@reduxjs/toolkit"


export const personSlice = createSlice({
    name:"Auth",
   initialState:{
    name: "Arun",
    role:"Trainer",
    isAutheneticate:false,
    email:"ak123@gmail;.com"
   },
   reducers:{
    userUpdate : (state,action) =>{
        // alert(JSON.stringify(action))
        if(action.payload.type==="name_Change"){
            state.name = action.payload.name
        }
    },
    authUpdate : (state,action) =>{
        alert(JSON.stringify(action))
    }
   }

   
})

export const {userUpdate,authUpdate}= personSlice.actions
export default personSlice.reducer