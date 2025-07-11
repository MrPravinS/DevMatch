import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
   name:"requests",
   initialState:[],
   reducers:{
    addRequest : (state, action) => action.payload,
    removeRequest:() => []
   }
})

export  const {addRequest, removeRequest} = requestsSlice.actions;
export default requestsSlice.reducer;