function Presentation( {title, description}){
return(
    <>
    <h2 className='presentation__title'>{title}</h2>
    <div className='presentation'>
    <p className='presentation__text'>{description}</p>
    </div>
    </>
)
}
export default Presentation