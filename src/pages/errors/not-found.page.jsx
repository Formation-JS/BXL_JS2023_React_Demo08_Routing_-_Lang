import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <h1>{t('error.notFound')}</h1>
        </>
    )
}

export default NotFoundPage;