import { createSlice } from "@reduxjs/toolkit";

export const IsOpenSlice = createSlice({
    name : "isopen",
    initialState : {
        isOpen : false, //global
        UnOpen : false,
        DeuxOpen : false,
        TroisOpen : false,
        QuatreOpen : false,
        dragonsKey : null, //entregistre la clé du livre
        questOpen : false  //pour le parchemin
    },
    reducers : {
        isOpen : (state, action) =>{
            state.isOpen = action.payload; //permet de switch de false à true
        },
        UnOpen : (state, action) =>{
            state.UnOpen = action.payload; //permet de switch de false à true
        },
        DeuxOpen : (state, action) =>{
            state.DeuxOpen = action.payload; //permet de switch de false à true
        },
        TroisOpen : (state, action) =>{
            state.TroisOpen = action.payload; //permet de switch de false à true
        },
        QuatreOpen : (state, action) =>{
            state.QuatreOpen = action.payload; //permet de switch de false à true
        },
        setDragonsKey : (state, action) => {
            state.dragonsKey = action.payload; //met à jour la clé du livre
        },
        questOpen : (state, action) =>{
            state.questOpen = action.payload; //pour ouvrir et ferme le parchemin
        }
    }
})

export const {isOpen, UnOpen, DeuxOpen, TroisOpen, QuatreOpen, setDragonsKey, questOpen} = IsOpenSlice.actions;
export default IsOpenSlice.reducer;