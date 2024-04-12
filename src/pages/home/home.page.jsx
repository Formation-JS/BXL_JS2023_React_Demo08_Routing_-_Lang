import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { tokenAtom } from '../../atoms/token.atom.js';

const HomePage = () => {
    const {t} = useTranslation();

    const token = useRecoilValue(tokenAtom);

    return (
        <>
            <h1>{t('home.title')}</h1>
            <h2>{token}</h2>
        </>
    )
}

export default HomePage;