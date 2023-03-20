import Dkeyimg from '../../Assets/Dragon_s-Key-01.webp'
import { keyOne } from '../../Reduxtore/ButtonRedux'
import { useDispatch} from 'react-redux'


function Dbutton1() {
    const dispatch = useDispatch();
    return (
            <button className='Dbtn b1' onClick={() => dispatch(keyOne(true))}>
            <img className='Dbtn__img' src={Dkeyimg} alt='Dessin de clé orné avec un dragon' />
        </button>
             
    )
}
export default Dbutton1
