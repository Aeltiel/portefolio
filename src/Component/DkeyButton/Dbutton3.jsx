import Dkeyimg from '../../Assets/Dragon_s-Key-01.webp'
import { useDispatch, useSelector} from 'react-redux'
import { keyThree} from '../../Reduxtore/ButtonRedux';

function Dbutton3() {
    const dispatch = useDispatch();
    const openKey = useSelector(state => state.button.keyThree);

    return (

        <button className={openKey ? 'hideDbtn b3' : 'Dbtn b3'} onClick={() => dispatch(keyThree(true))}>
            <img className='Dbtn__img' src={Dkeyimg} alt='Dessin de clé orné avec un dragon' />
            </button>
    )
}
export default Dbutton3