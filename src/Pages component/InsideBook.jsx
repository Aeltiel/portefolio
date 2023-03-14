import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { UnOpen, DeuxOpen, TroisOpen, QuatreOpen, setDragonsKey } from "../Reduxtore/IsOpen";

function InsideBook({ content, idbook }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    //state d'ouverture pour chaque livre
    const isUnOpen = useSelector(state => state.isopen.UnOpen)
    const isDeuxOpen = useSelector(state => state.isopen.DeuxOpen)
    const isTroisOpen = useSelector(state => state.isopen.TroisOpen)
    const isQuatreOpen = useSelector(state => state.isopen.QuatreOpen)

    useEffect(() => {
        setLoading(false);
    }, [])

    if (loading) {
        return (<div></div>)
    } else {
        //vérification de la props idbook avec un id correspondant à chaque livre + vérif du state d'ouverture
        if (idbook === "001" && isUnOpen){
            return (
                <>
                    {isUnOpen ?
                        <div className="inside__Container">
                            <button className="closeBtn" onClick={() => {dispatch(UnOpen(false)); dispatch(setDragonsKey(null))}}><i className="fa-solid fa-xmark"></i></button>
                            <div>{content}</div>
                        </div> : <div></div>}
                </>
            )
        }
        else if (idbook === "002" && isDeuxOpen){
            return (
                <>
                    {isDeuxOpen ?
                        <div className="inside__Container">
                            <button className="closeBtn" onClick={() => {dispatch(DeuxOpen(false)); dispatch(setDragonsKey(null))}}><i className="fa-solid fa-xmark"></i></button>
                            <div>{content}</div>
                        </div> : <div></div>}
                </>
            )
        }
        else if (idbook === "003" && isTroisOpen){
            return (
                <>
                    {isTroisOpen ?
                        <div className="inside__Container">
                            <button className="closeBtn" onClick={() => {dispatch(TroisOpen(false)); dispatch(setDragonsKey(null))}}><i className="fa-solid fa-xmark"></i></button>
                            <div>{content}</div>
                        </div> : <div></div>}
                </>
            )
        }
        else if (idbook === "004" && isQuatreOpen){
            return (
                <>
                    {isQuatreOpen ?
                        <div className="inside__Container">
                            <button className="closeBtn" onClick={() => {dispatch(QuatreOpen(false)); dispatch(setDragonsKey(null))}}><i className="fa-solid fa-xmark"></i></button>
                            <div>{content}</div>
                        </div> : <div></div>}
                </>
            )
        }
    }
}

export default InsideBook