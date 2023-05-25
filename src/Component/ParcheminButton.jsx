import InsideParchemin from "../Pages component/InsideParchemin";
import { questOpen } from "../Reduxtore/IsOpen";
import { useDispatch, useSelector } from "react-redux";

function ParcheminButton(){
    const dispatch = useDispatch();
    const open = useSelector(state => state.isopen.questOpen);

    function openParchemin(){
        if(open){
            return(
                <div className="openQuest">
                    <InsideParchemin/>
                </div>
        )
        }
        
    }
return(
 <>
        <button className="parcheminButton" onClick={() => dispatch(questOpen(true))}></button>
        {openParchemin()}
  </>
)
}
export default ParcheminButton