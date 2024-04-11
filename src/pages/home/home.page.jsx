import NavBar from '../../containers/nav-bar/nav-bar.jsx';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const {t} = useTranslation();

    return (
        <>
            <NavBar />
            <h1>{t('home.title')}</h1>
        </>
    )
}

export default HomePage;