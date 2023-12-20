import Parchemin from "./Parchemin";
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { questOpen } from "../Reduxtore/IsOpen";

function InsideParchemin() {
    const dispatch = useDispatch();
    const open = useSelector(state => state.isopen.questOpen);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [])

    if (loading) {
        return (<div></div>)
    } else {
        if (open) {
            return (
                <>
                    {open ?
                        <div className="insideParchemin">
                            <button className="paper__closeBtn" onClick={() => dispatch(questOpen(false))}><i className="fa-solid fa-xmark"></i></button>
                            <Parchemin />
                        </div>
                        : <div></div>
                    }
                </>

            )
        }

    }
}
export default InsideParchemin