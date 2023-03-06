import { useEffect, useState } from "react"
import Carrousel from "./Carroussel"
import InsideBook from "./InsideBook"
import { useDispatch, useSelector } from 'react-redux';
import { isOpen } from "../Reduxtore/IsOpen";



function Book({ title, clickFunction, content}) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.isopen.isOpen);

    return (
        <>
        <div className="bookContainer">
            <div className="book">
                <button className="book_side front" onClick={() => dispatch(isOpen(true))}>
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
        {open ? <div className='library__book-ouvert'>
                  <div className='library__book-content'>
                    <div className="library__book-button" onClick={() => dispatch(isOpen(false))}>X</div>
                    <div>
                        <InsideBook/>
                    </div>
                  </div>
               </div> : <div></div>}
        </>
    )
}
export default Book