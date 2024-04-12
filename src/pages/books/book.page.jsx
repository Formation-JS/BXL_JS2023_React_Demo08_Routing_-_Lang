import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';


const BookPage = () => {

    const { t } = useTranslation();

    return (
        <>
            <h1>{t('book.title')}</h1>
            <Outlet />
        </>
    )
}

export default BookPage;
