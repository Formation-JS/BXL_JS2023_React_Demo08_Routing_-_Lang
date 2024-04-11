import { LANGUAGES } from '../../lang/lang.js';
import Select from 'react-select';
import style from './header.module.scss';
import { useTranslation } from 'react-i18next';

const Header = () => {

    const { i18n } = useTranslation();

    const languageOptions = LANGUAGES.map(lang => ({
        value: lang.code,
        label: lang.label,
        image: lang.flag
    }));
    const languageDefaultValue = languageOptions.find(lang => lang.value == i18n.language);

    const handleChangeLanguage = (data) => {
        i18n.changeLanguage(data.value);
    }

    return (
        <header className={style.header}>
            <span className={style.title}>Routing & Langague</span>
            <Select
                defaultValue={languageDefaultValue}
                options={languageOptions}
                onChange={handleChangeLanguage}
                formatOptionLabel={data => (
                    <div className={style.option}>
                        <img src={data.image} alt={data.label} />
                        <span>{data.label}</span>
                    </div>
                )}
            />
        </header>
    );
};

export default Header;