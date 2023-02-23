function Container({image, title, description, language}){
    return(
        <>
            <div className="container__box">
                <img className="container__img" src={image} alt="screen projet booki"/>
                <div className="container__text">
                    <h3 className="container__text--title">{title}</h3>
                    <p className="container__text--description">{description}</p>
                    <p className="container__text--langage">{language}</p>
                </div>
            </div>
        </>
    )
}
export default Container