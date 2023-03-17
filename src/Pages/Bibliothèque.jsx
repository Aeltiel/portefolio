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
import Dbutton3 from '../Component/DkeyButton/Dbutton3';
import Dbutton4 from '../Component/DkeyButton/Dbutton4';
import { setInfos } from "../Reduxtore/InfoRedux";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UnOpen, DeuxOpen, TroisOpen, QuatreOpen } from '../Reduxtore/IsOpen';

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
               <Dbutton3/>
               <Dbutton4/>
               <Bougie />
                  <div className='library__book'>
                     {data.map(element => {
                        switch (element.id) {
                           case "001":
                              return (
                                 <Book
                                    key={element.id}
                                    title={element.title}
                                    dkey={element.dragonsKey}
                                    redux={(e) => dispatch(UnOpen(true))}
                                    idbook={element.id}
                                    data={<Page
                                       img={element.image}
                                       title={element.title}
                                       text={element.description}
                                    />}
                                 />
                              );
                              break;
                           case "002":
                              return (
                                 <Book
                                    key={element.id}
                                    dkey={element.dragonsKey}
                                    title={element.title}
                                    idbook={element.id}
                                    redux={(e) => dispatch(DeuxOpen(true))}
                                    data={<Carrousel />}
                                 />
                              )
                              break;
                           case "003":
                              return (
                                 <Book
                                    key={element.id}
                                    dkey={element.dragonsKey}
                                    title={element.title}
                                    idbook={element.id}
                                    redux={(e) => dispatch(TroisOpen(true))}
                                    data={<Page
                                       img={element.image}
                                       title={element.title}
                                       text={element.description}
                                    />}
                                 />
                              )
                              break;
                           case "004":
                              return (
                                 <Book
                                    key={element.id}
                                    dkey={element.dragonsKey}
                                    title={element.title}
                                    idbook={element.id}
                                    redux={(e) => dispatch(QuatreOpen(true))}
                                    data={<CarrouselLoisirs />}
                                 />
                              )
                              break;

                           default:
                              console.log("Coucou")
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