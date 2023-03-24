import Dkeyimg from '../../Assets/Dragon_s-Key-01.webp'
import { keyOne } from '../../Reduxtore/ButtonRedux'
import { useDispatch, useSelector} from 'react-redux'


function Dbutton1() {
    const dispatch = useDispatch();
    const openKey = useSelector(state => state.button.keyOne);
    return (
            <button className={openKey ? 'hideDbtn b1':'Dbtn b1' } onClick={() => {dispatch(keyOne(true))}}>
            <img className='Dbtn__img' src={Dkeyimg} alt='Dessin de clé orné avec un dragon' />
        </button>
             
    )
}
export default Dbutton1
