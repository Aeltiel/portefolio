import CarrouselLoisirs from '../Pages component/CarrousselLoisirs'
import Page from '../Pages component/Page'
import book from '../Data/book.json'
import { useState, useEffect } from 'react'
function Brouillon(){
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setLoading(false);
    },[])

    if(loading){
        return(<div></div>)
    }else{
       return(
        <div>
    <CarrouselLoisirs/>
        {book.map(element => {
            if (element.id === '001'){
                return(
                    <Page
                    key={element.id}
                        img={element.image}
                        title={element.title}
                        text={element.description}
                    />
                )
            }
            if (element.id === "003"){
                return(
                    <Page
                    key={element.id}
                        img={element.image}
                        title={element.title}
                        text={element.description}
                    />
                )
            }
        })}
    </div>
) 
    }

}
export default Brouillon