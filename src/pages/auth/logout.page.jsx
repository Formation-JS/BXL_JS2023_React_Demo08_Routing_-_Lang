import { useRecoilState } from 'recoil';
import { tokenAtom } from '../../atoms/token.atom.js';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {

    const [token, setToken] = useRecoilState(tokenAtom);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        setToken(null);
        navigate('/');
    }

    return (
        <>
            <h1>Logout...</h1>
            <button type='button' onClick={handleLogout}>Logout</button>
        </>
    )
}

export default LogoutPage