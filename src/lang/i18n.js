import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
    .use(initReactI18next)
    .init({
        lng: 'nl',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React le fait déjà
        },
        resources: {
            // Ensuite le ressource seront en json
            en: {
                translation: {
                    title: 'Hello World',
                    main: {
                        desc: 'This is a description :o',
                        email: 'della.duck@digitalcity.brussels'
                    }
                }
            },
            fr: {
                translation: {
                    title: 'Bonjour le monde'
                }
            },
            nl: {
                translation: {
                    title: 'Hallo wereld'
                }
            }
        }
    });

export default i18next;