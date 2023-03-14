import { combineReducers } from "redux";
import NavBarReducer from "./NavbarRedux";
import InfoReducer from "./InfoRedux";
import CarousselReducer from "./CarousselRedux";
import CarrouselLoisirsRedux from "./CarrouselLoisirsRedux";
import IsOpen from "./IsOpen";
import ButtonRedux from "./ButtonRedux";


const Reducers = combineReducers({
    navbar: NavBarReducer,
    info: InfoReducer,
    carrousel : CarousselReducer,
    carrouselLoisirs : CarrouselLoisirsRedux,
    isopen : IsOpen,
    button : ButtonRedux
});
export default Reducers