import Dkeyimg from '../../Assets/Dragon_s-Key-01.webp'
import { useDispatch, useSelector } from 'react-redux'

function Dbutton1(dkey) {
    const dispatch = useDispatch();
    const lock = useSelector(state => state.button.keyOne);

    return (
        <button className='Dbtn b1' onClick={() => dispatch(lock)}>
            <img className='Dbtn__img' src={Dkeyimg} alt='Dessin de clé orné avec un dragon' />
        </button>
    )
}
export default Dbutton1