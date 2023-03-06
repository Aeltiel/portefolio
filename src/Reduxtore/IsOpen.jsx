import { createSlice } from "@reduxjs/toolkit";

export const IsOpenSlice = createSlice({
    name : "isopen",
    initialState : {
        isOpen : false,
    },
    reducers : {
        isOpen : (state, action) =>{
            state.isOpen = action.payload; //permet de switch de false à true
        },
    }
})

export const {isOpen, isClose} = IsOpenSlice.actions;
export default IsOpenSlice.reducer;