import Dkeyimg from '../../Assets/Dragon_s-Key-01.webp'
import { useDispatch} from 'react-redux'
import { keyThree} from '../../Reduxtore/ButtonRedux';

function Dbutton3({dkey}) {
    const dispatch = useDispatch();

    return (

        <button className='Dbtn b3' onClick={() => dispatch(keyThree(true))}>
            <img className='Dbtn__img' src={Dkeyimg} alt='Dessin de clé orné avec un dragon' />
            </button>
    )
}
export default Dbutton3