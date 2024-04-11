import NavBar from '../../containers/nav-bar/nav-bar.jsx';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <NavBar />
            <h1>{t('error.notFound')}</h1>
        </>
    )
}

export default NotFoundPage;