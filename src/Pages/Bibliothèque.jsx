import Book from '../Pages component/Book';
import book from '../Data/book.json';
import Star from '../Pages component/Star';
import { setInfos } from "../Reduxtore/InfoRedux";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Bibliothèque() {
   const dispatch = useDispatch();
   const data = useSelector(state => state.info.infos);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      setLoading(false);
      const info = book;
      dispatch(setInfos(info))
   }, [])

   if (loading) {
      return (<div></div>)
   } else {
      return (
         <>
            <main className='background'>
               <div className='library__book'>
               {data.map(element =>(
                  <Book 
                     key={element.id}
                     title={element.title}
                  />
               ))}
               </div>
               <div className='library__teleport'>
                  <Star/>
               </div>
            </main>
         </>
      )
   }

}
export default Bibliothèque;