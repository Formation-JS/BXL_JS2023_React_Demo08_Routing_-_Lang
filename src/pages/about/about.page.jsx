import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <h1>{t('about.title')}</h1>
        </>
    )
}

export default AboutPage;