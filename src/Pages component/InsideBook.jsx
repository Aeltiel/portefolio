import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { isOpen } from "../Reduxtore/IsOpen";

function InsideBook({ content }) {
    const dispatch = useDispatch();
    const close = useSelector(state => state.isopen.isOpen)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [])

    if (loading) {
        return (<div></div>)
    } else {
        return (
            <>
                {close ?
                    <div className="inside__Container">
                        <button className="closeBtn" onClick={() => dispatch(isOpen(false))}><i className="fa-solid fa-xmark"></i></button>
                        <div>{content}</div>
                    </div> : <div></div>}
            </>
        )
    }
}

export default InsideBook