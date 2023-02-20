import { configureStore } from "@reduxjs/toolkit"
//import NavBarReducer from "./NavbarRedux";
import Reducers from "./Reducers";

const store = configureStore({
    reducer:Reducers
});
/*const store=configureStore({
    reducer : NavBarReducer
})*/
export default store