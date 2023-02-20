import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setInfos } from "../Reduxtore/InfoRedux";
const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();
    const info = useSelector((state) => state.info.infos);//mon state
    useEffect(() => {
        //récupération des données spécifique à l'id 001 dans mon json
        var data = book.find(element => element.id === "002");
        //mise à jour du state avec les données de la var data via dispatch
        dispatch(setInfos(data));
        setLoading(false);
    }, []);
    if (loading) {
        return (<div></div>)
    } else {}