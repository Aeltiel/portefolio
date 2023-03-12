import Book from '../Pages component/Book';
import book from '../Data/book.json';
import Star from '../Pages component/Star';
import Star1 from '../Pages component/Star1';
import Bougie from '../Pages component/Bougies';
import Page from '../Pages component/Page';
import Carrousel from '../Pages component/Carroussel';
import CarrouselLoisirs from '../Pages component/CarrousselLoisirs';
import Dbutton1 from '../Component/DkeyButton/Dbutton1';
import Dbutton2 from '../Component/DkeyButton/Dbutton2';
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
               <Dbutton1/>
               <Dbutton2/>
               <Bougie />
               <div className='library__book'>
                  {data.map(element => {
                     if (element.id === '001') {
                        return (
                           <Book
                              key={element.id}
                              title={element.title}
                              dkey={element.dragonsKey}
                              data={<Page
                                 img={element.image}
                                 title={element.title}
                                 text={element.description}
                              />}
                           />
                        )
                     }
                     if(element.id === '002'){
                        return (
                           <Book
                              key={element.id}
                              dkey={element.dragonsKey}
                              title={element.title}
                              data={<Carrousel/>}
                           />
                        )
                     }
                     if(element.id === '003'){
                        return (
                           <Book
                              key={element.id}
                              dkey={element.dragonsKey}
                              title={element.title}
                              data={<Page
                                 img={element.image}
                                 title={element.title}
                                 text={element.description}
                              />}
                           />
                        )
                     }
                     if(element.id === '004'){
                        return (
                           <Book
                              key={element.id}
                              dkey={element.dragonsKey}
                              title={element.title}
                              data={<CarrouselLoisirs/>}
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