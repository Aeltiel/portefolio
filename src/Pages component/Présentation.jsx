import Moi from '../Assets/moi.webp'

function Presentation( {title, description}){
return(
    <>
    <h2 className='presentation__title'>{title}</h2>
    <div className='presentation'>
    <p className='presentation__text'>{description}</p>
    <img className="presentation__img" src={Moi} alt="Ingrid Stemer"/>
    </div>
    </>
)
}
export default Presentation