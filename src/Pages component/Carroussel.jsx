

import { useState } from "react"


function Carrousel({ title, description, langages, img}) {

    const [image, setImage] = useState(img);
    const [imgIndex, setimgIndex] = useState(0);

    function Left() {
        if (imgIndex < image.length - 1) {
            setimgIndex(imgIndex + 1)
        } else {
            setimgIndex(0)
        }
    }
    function Right() {
        if (imgIndex > 0) {
            setimgIndex(imgIndex - 1)
        } else {
            setimgIndex(image.length - 1)
        }
    }

    return (
        <>
            <div className="carrousel__Container">
                <button className="carrousel__Left" onClick={(e) => Left()}><i className="fa-solid fa-caret-up"></i></button>
                <div className="carrousel__box">
                    <p className="carrousel__box--title">{title}</p>
                    <p className="carrousel__box--book--description">{description}</p>
                    <p className="carrousel__box--book--langage">{langages}</p>
                    <img className="carrousel__box--img" src={image[imgIndex]} alt="project screen" />
                </div>

                <div className="carrousel__box">
                    <p className="carrousel__box--title">{title}</p>
                    <p className="carrousel__box--book--description">{description}</p>
                    <p className="carrousel__box--book--langage">{langages}</p>
                    <img className="carrousel__box--img" src={image[imgIndex]} alt="project screen" />
                </div>

                <div className="carrousel__box">
                    <p className="carrousel__box--title">{title}</p>
                    <p className="carrousel__box--book--description">{description}</p>
                    <p className="carrousel__box--book--langage">{langages}</p>
                    <img className="carrousel__box--img" src={image[imgIndex]} alt="project screen" />
                </div>

                <button className="carrousel__Right" onClick={(e) => Right()}><i className="fa-solid fa-caret-up"></i></button>
            </div>
        </>
    )
}
export default Carrousel