import { combineReducers } from "redux";
import NavBarReducer from "./NavbarRedux";
import InfoReducer from "./InfoRedux";
import CarousselReducer from "./CarousselRedux"

const Reducers = combineReducers({
    navbar: NavBarReducer,
    info: InfoReducer,
    caroussel : CarousselReducer,
});
export default Reducers