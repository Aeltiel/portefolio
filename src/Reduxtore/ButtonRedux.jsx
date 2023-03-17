import { createSlice } from "@reduxjs/toolkit";

export const ButtonSlice = createSlice({
    name : "lockButton",
    initialState : {
        keyOne : false,
        keyTwo : false,
        keyThree : false,
        keyFour : false,
    },
    reducers : {
        keyOne : (state, action) =>{
            state.keyOne = action.payload; //permet de vérouillé/dévérouiller les state open des livres
        },
        keyTwo : (state, action) =>{
             state.keyTwo = action.payload;
        },
        keyThree : (state, action) =>{
            state.keyThree = action.payload;
        },
        keyFour : (state, action) =>{
            state.keyFour = action.payload;
        },
    }
})

export const {keyOne, keyTwo, keyThree, keyFour} = ButtonSlice.actions;
export default ButtonSlice.reducer;