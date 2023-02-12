function Book() {
    return (
        <div className="bookContainer">
            <div className="book">
                <div className="book_side front">
                    <div className="front--title"><h4>Couverture</h4></div>
                    <i class="fa-solid fa-lock"></i>
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