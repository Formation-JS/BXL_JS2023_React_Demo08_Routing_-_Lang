import NavBar from '../../containers/nav-bar/nav-bar.jsx';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <NavBar />
            <h1>{t('about.title')}</h1>
        </>
    )
}

export default AboutPage;