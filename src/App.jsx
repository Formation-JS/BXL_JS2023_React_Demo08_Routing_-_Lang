import './App.css'
import Header from './containers/header/header.jsx'
import { useTranslation } from 'react-i18next';
import HomePage from './pages/home/home.page.jsx';

function App() {

  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        
      </main>
    </>
  )
}

export default App
