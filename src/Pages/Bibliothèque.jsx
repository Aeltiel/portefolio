import Book from '../Pages component/Book';
import book from '../Data/book.json';
import Star from '../Pages component/Star';
import Star1 from '../Pages component/Star1';
import Bougie from '../Pages component/Bougies';
import { setInfos } from "../Reduxtore/InfoRedux";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Bibliothèque() {
   const dispatch = useDispatch();
   const data = useSelector(state => state.info.infos);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setLoading(false);
      const info = book;
      dispatch(setInfos(info))
   }, [dispatch])

   if (loading) {
      return (<div></div>)
   } else {
      return (
         <>
            <main className='background'>
               <Bougie/>
               <div className='library__book'>
                  {data.map(element => {
                     if (element.dragonsKey === "coucou"){
                        return (
                           <Book
                              key={element.dragonsKey}
                              title={element.title}
                           />
                        )
                     }
                     else {
                        return (
                           <Book
                              key={element.dragonsKey}
                              title={element.title}
                           />
                        )
                     }
                  })}
               </div>
               <Link to='/'>
                  <div className='library__teleport'>
                     <Star />
                     <Star1 />
                  </div>
               </Link>
            </main>
         </>
      )
   }

}
export default Bibliothèque;