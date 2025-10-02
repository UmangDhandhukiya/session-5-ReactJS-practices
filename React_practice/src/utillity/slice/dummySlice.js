import { createSlice } from "@reduxjs/toolkit";

const dummySlice = createSlice({
    name:"dummy",
    initialState: null,
    reducers:{
        addData:(state,action) => {
            return action.payload
        }
    }
})

export const {addData} = dummySlice.actions

export default dummySlice.reducer