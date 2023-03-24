import Dkeyimg from '../../Assets/Dragon_s-Key-01.webp'
import { useDispatch,useSelector} from 'react-redux'
import { keyTwo } from '../../Reduxtore/ButtonRedux';


function Dbutton2() {
    const dispatch = useDispatch();
    const openKey = useSelector(state => state.button.keyTwo);

    return (
            <button className={openKey ? 'hideDbtn b2' : 'Dbtn b2'} onClick={() => dispatch(keyTwo(true)) }>
            <img className='Dbtn__img' src={Dkeyimg} alt='Dessin de clé orné avec un dragon' />
        </button>
           
    )
}
export default Dbutton2