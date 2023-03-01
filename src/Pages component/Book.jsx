

function Book({title}) {

    return (
        <div className="bookContainer">
            <div className="book">
                <div className="book_side front">
                    <div className="front--title"><h4>{title}</h4></div>
                    <div className="front--icons">
                        <i className="fa-solid fa-lock"></i>
                        <i className="fa-solid fa-lock-open"></i>
                    </div>
                    
                </div>
                <div className="book_side back"></div>
                <div className="book_side left"></div>
                <div className="book_side right"></div>
                <div className="book_side top"></div>
                <div className="book_side bottom"></div>
            </div>
        </div>
    )
}
export default Book