import { useEffect, useState } from "react"
import Carrousel from "./Carroussel"
import InsideBook from "./InsideBook"


function Book({ title, clickFunction, content}) {
    const [estOuvert, setEstOuvert] = useState(false)

    function ouvrirLeLivre(){
        setEstOuvert(true)
     }
  
     function fermerLeLivre(){
        setEstOuvert(false)
     }


    return (
        <>
        <div className="bookContainer">
            <div className="book">
                <button className="book_side front" onClick={(e) => ouvrirLeLivre()}>
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
        {estOuvert ? <div className='library__book-ouvert'>
                  <div className='library__book-content'>
                    <div className="library__book-button" onClick={(e) => fermerLeLivre()}>X</div>
                    <div>
                        {content}
                    </div>
                  </div>
               </div> : <div></div>}
        </>
    )
}
export default Book