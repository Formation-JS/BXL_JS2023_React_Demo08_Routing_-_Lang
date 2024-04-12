import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const {t} = useTranslation();

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
                    <Link to='/fred'>Error :o</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;