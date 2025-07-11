import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({
    name:"connections",
    initialState:[],
    reducers:{
        getConnections:(state, action ) => action.payload,
        removeConnections:() => []
    }
})

export const {getConnections, removeConnections} = connectionSlice.actions;
export default connectionSlice.reducer;