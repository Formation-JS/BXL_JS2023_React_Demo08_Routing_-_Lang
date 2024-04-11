import { LANGUAGES } from '../../lang/lang.js';
import Select from 'react-select';
import style from './header.module.scss';

const Header = () => {

    const langagueOptions = LANGUAGES.map(lang => ({
        value: lang.code,
        label: lang.label,
        image: lang.flag
    }));
    const langageDefaultValue = langagueOptions.find(lang => lang.value == 'nl');

    return (
        <header className={style.header}>
            <span className={style.title}>Routing & Langague</span>
            <Select
                defaultValue={langageDefaultValue}
                options={langagueOptions}
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