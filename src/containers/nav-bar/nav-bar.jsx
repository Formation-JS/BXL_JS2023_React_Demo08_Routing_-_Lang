import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/token.atom.js';

const NavBar = () => {
    const {t} = useTranslation();
    const token = useRecoilValue(tokenAtom);

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>{t('nav.home')}</Link>
                </li>
                <li>
                    <Link to='/about'>{t('nav.about')}</Link>
                </li>
                <li>
                    <Link to='/book'>{t('nav.book')}</Link>
                </li>
                <li>
                    {!!token ? (
                        <Link to='/logout'>Logout</Link>
                    ): (
                        <Link to='/login'>Login</Link>
                    )}
                </li>
                <li>
                    <Link to='/fred'>Error :o</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;