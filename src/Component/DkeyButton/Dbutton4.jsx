import Dkeyimg from '../../Assets/Dragon_s-Key-01.webp'
import { useDispatch, useSelector} from 'react-redux'
import { keyFour} from '../../Reduxtore/ButtonRedux';


function Dbutton4() {
    const dispatch = useDispatch();
    const openKey = useSelector(state => state.button.keyFour);
    return (
        <button className={openKey ? 'hideDbtn b4' : 'Dbtn b4'} onClick={() => dispatch(keyFour(true))}>
            <img className='Dbtn__img' src={Dkeyimg} alt='Dessin de clé orné avec un dragon' />
        </button>
    )
}
export default Dbutton4