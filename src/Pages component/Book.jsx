import InsideBook from "./InsideBook"
import { useDispatch, useSelector } from 'react-redux';
import { setDragonsKey } from "../Reduxtore/IsOpen";


function Book({ title, dkey, data, redux, idbook }) {
    const dispatch = useDispatch();
    const dragonsKey = useSelector(state => state.isopen.dragonsKey)
    const keyOne = useSelector(state => state.button.keyOne)
    const keyTwo = useSelector(state => state.button.keyTwo)
    const keyThree = useSelector(state => state.button.keyThree)
    const keyFour = useSelector(state => state.button.keyFour)

//fonction pour vérifier la dragonskey et faire en sorte que seul le livre associer 
//à la key s'ouvre afin d'éviter que tout s'ouvre en même temps
    function check() {
        if (dragonsKey === dkey && keyOne){
            return (
                <div className='ouvert'>
                    <InsideBook idbook={idbook} content={data} />
                </div>
            )
        }
        else if (dragonsKey === dkey && keyTwo){
            return (
                <div className='ouvert'>
                    <InsideBook idbook={idbook} content={data} />
                </div>
            )
        }
        else if (dragonsKey === dkey && keyThree){
            return (
                <div className='ouvert'>
                    <InsideBook idbook={idbook} content={data} />
                </div>
            )
        }
        else if (dragonsKey === dkey && keyFour){
            return (
                <div className='ouvert'>
                    <InsideBook idbook={idbook} content={data} />
                </div>
            )
        }
    }

    function unlock(){
        if(keyOne === true){
           return(<i className="fa-solid fa-lock-open"></i>) 
        } else if (keyTwo === true){
            return(<i className="fa-solid fa-lock-open"></i> ) 
        }else if (keyThree === true){
            return(<i className="fa-solid fa-lock-open"></i> ) 
        }else if (keyFour === true){
            return(<i className="fa-solid fa-lock-open"></i> ) 
        }else{
            return (<i className="fa-solid fa-lock"></i>)
        }
    }

//setDragonKey(dkey) dans on click permet le clic sélectif
//ligne 54 : redux() : permet de faire l'ouverture et la fermeture depuis la page bibliothèque
//avec le state correspondant à chaque livre.  
    return (
        <>
            <div className="bookContainer">
                <div className="book">
                    <button className="book_side front" onClick={() => {redux(); dispatch(setDragonsKey(dkey))}}>
                        <div className="front--title"><h4>{title}</h4></div>
                        <div className="front--icons">
                         {unlock()}
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
