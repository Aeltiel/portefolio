import { createSlice } from "@reduxjs/toolkit";

export const infosSlice = createSlice({
    //permet d'initialiser le state
    name : "infos",
    initialState : {
        infos : [],
    },
    reducers : {
        setInfos : (state, action) => { // c'est ici qu'on met la logique du reducer
            state.infos = action.payload //ceci permet la mise à jour du state quand on l'appel
        }
    }
})

export const {setInfos} = infosSlice.actions;
export default infosSlice.reducer;