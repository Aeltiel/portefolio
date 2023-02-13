const initialState = {
navigation:"Accueil"
}

const NavBarReducer = (state = initialState, action)=>{
switch (action.type){
    case "Active" : 
    return{
        ...state,
        navigation : action.payload
    };
    default: return state;
}
};
export default NavBarReducer;