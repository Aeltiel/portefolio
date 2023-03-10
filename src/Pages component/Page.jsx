function Page({img, text, title}){
return(
    <div className="page__box">
        <img className="page__img" src={img} alt="Ingrid Stemer/Logo OC"/>
        <div className="page__content">
            <h3 className="page__content--title">{title}</h3>
            <p className="page__cotnent--text">{text}</p>

        </div>
    </div>
)
}
export default Page