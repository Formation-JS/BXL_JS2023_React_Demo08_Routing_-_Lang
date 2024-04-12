import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './containers/header/header.jsx'
import NavBar from './containers/nav-bar/nav-bar.jsx'

function App() {

  return (
    <>
      <Header />
      <main>
        <NavBar />
        <Outlet />
      </main>
    </>
  )
}

export default App
