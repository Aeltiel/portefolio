import { combineReducers } from "redux";
import NavBarReducer from "./NavbarRedux";
import InfoReducer from "./InfoRedux";
import CarousselReducer from "./CarousselRedux";
import IsOpen from "./IsOpen";

const Reducers = combineReducers({
    navbar: NavBarReducer,
    info: InfoReducer,
    caroussel : CarousselReducer,
    isopen : IsOpen
});
export default Reducers