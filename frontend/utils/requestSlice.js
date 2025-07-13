import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
   name:"requests",
   initialState:[],
   reducers:{
    addRequest : (state, action) => {
       return [...state , ...action.payload]
    },
    removeRequest:(state, action) =>{
        const newArr = state.filter(r=> r._id !== action.payload)
        return newArr
    }
   }
})

export  const {addRequest, removeRequest} = requestsSlice.actions;
export default requestsSlice.reducer;