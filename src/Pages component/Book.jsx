import InsideBook from "./InsideBook"
import { useDispatch, useSelector } from 'react-redux';
import { isOpen } from "../Reduxtore/IsOpen";
import { useState } from "react";


function Book({ title, dkey, data }) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.isopen.isOpen);
    const [dragonsKey, setDragonKey] = useState(null);

//fonction pour vérifier la dragonskey et faire en sorte que seul le livre associer 
//à la key s'ouvre afin d'éviter que tout s'ouvre en même temps
    function check() {
        if (dragonsKey === dkey && open) {
            return (
                <div className='ouvert'>
                    <InsideBook content={data} />
                </div>
            )
        }
    }
console.log(dragonsKey)

//setDragonKey(dkey) dans on click permet le clic sélectif
    return (
        <>
            <div className="bookContainer">
                <div className="book">
                    <button className="book_side front" onClick={() => {dispatch(isOpen(true)); setDragonKey(dkey)}}>
                        <div className="front--title"><h4>{title}</h4></div>
                        <div className="front--icons">
                            <i className="fa-solid fa-lock"></i>
                            <i className="fa-solid fa-lock-open"></i>
                        </div>
                    </button>
                    <div className="book_side back"></div>
                    <div className="book_side left"></div>
                    <div className="book_side right"></div>
                    <div className="book_side top"></div>
                    <div className="book_side bottom"></div>
                </div>
            </div>
            {check()}
        </>
    )
}
export default Book
/*open ? <div className='ouvert'>
                <InsideBook content={data}/>
               </div> : <div></div>*/