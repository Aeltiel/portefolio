import book from "../Data/book.json";
import Rules from "../Bibliotheque component/Rules";
import Book1 from "../Bibliotheque component/Book 1";
import Book2 from "../Bibliotheque component/Book 2";
import Book3 from "../Bibliotheque component/Book 3";
import Book4 from "../Bibliotheque component/Book 4";
import Star from "../Bibliotheque component/Star";
import Star1 from "../Bibliotheque component/Star1";
import Bougie from "../Bibliotheque component/Bougies";
import Page from "../Bibliotheque component/Page";
import PagePresentation from "../Bibliotheque component/PagePresentation";
import Carrousel from "../Bibliotheque component/Carroussel";
import CarrouselLoisirs from "../Bibliotheque component/CarrousselLoisirs";
import Dbutton1 from "../Component/DkeyButton/Dbutton1";
import Dbutton2 from "../Component/DkeyButton/Dbutton2";
import Dbutton3 from "../Component/DkeyButton/Dbutton3";
import Dbutton4 from "../Component/DkeyButton/Dbutton4";
import ParcheminButton from "../Bibliotheque component/ParcheminButton";
import Portail from "../Bibliotheque component/Portail";
import { setInfos } from "../Reduxtore/InfoRedux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UnOpen, DeuxOpen, TroisOpen, QuatreOpen } from "../Reduxtore/IsOpen";

function Bibliothèque() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.info.infos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    const info = book;
    dispatch(setInfos(info));
  }, [dispatch]);

  if (loading) {
    return <div></div>;
  } else {
    return (
      <>
        <main className="background">
          <Dbutton1 />
          <Dbutton2 />
          <Dbutton3 />
          <Dbutton4 />
          <Bougie />
          <div className="library__book">
            {data.map((element) => {
              switch (element.id) {
                case "001":
                  return (
                    <Book1
                      key={element.id}
                      title={element.title}
                      dkey={element.dragonsKey}
                      redux={(e) => dispatch(UnOpen(true))}
                      idbook={element.id}
                      data={
                        <PagePresentation
                          img={element.image}
                          title={element.title}
                          text={element.description}
                        />
                      }
                    />
                  );
                  break;
                case "002":
                  return (
                    <Book2
                      key={element.id}
                      dkey={element.dragonsKey}
                      title={element.title}
                      idbook={element.id}
                      redux={(e) => dispatch(DeuxOpen(true))}
                      data={<Carrousel />}
                    />
                  );
                  break;
                case "003":
                  return (
                    <Book3
                      key={element.id}
                      dkey={element.dragonsKey}
                      title={element.title}
                      idbook={element.id}
                      redux={(e) => dispatch(TroisOpen(true))}
                      data={<Page data={element} />}
                    />
                  );
                  break;
                case "004":
                  return (
                    <Book4
                      key={element.id}
                      dkey={element.dragonsKey}
                      title={element.title}
                      idbook={element.id}
                      redux={(e) => dispatch(QuatreOpen(true))}
                      data={<CarrouselLoisirs />}
                    />
                  );
                  break;

                default:
                  console.log("Coucou");
              }
            })}
          </div>
          <Rules />
          <Portail />
          <ParcheminButton />
          <Link to="/Home">
            <div className="library__teleport">
              <Star />
              <Star1 />
            </div>
          </Link>
        </main>
      </>
    );
  }
}
export default Bibliothèque;
