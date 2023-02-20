import { combineReducers } from "redux";
import NavBarReducer from "./NavbarRedux";
import InfoReducer from "./InfoRedux";

const Reducers = combineReducers({
    navbar: NavBarReducer,
    info: InfoReducer,
});
export default Reducers