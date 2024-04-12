import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const {t} = useTranslation();

    return (
        <>
            <h1>{t('home.title')}</h1>
        </>
    )
}

export default HomePage;