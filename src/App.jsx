import './App.css'
import Header from './containers/header/header.jsx'
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <h1>{t('title')}</h1>
        <p>{t('main.desc')}</p>
        <p>{t('main.email')}</p>
      </main>
    </>
  )
}

export default App
