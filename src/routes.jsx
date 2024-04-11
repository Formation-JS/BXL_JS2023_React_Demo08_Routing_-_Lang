import AboutPage from './pages/about/about.page.jsx';
import NotFoundPage from './pages/errors/not-found.page.jsx';
import HomePage from './pages/home/home.page.jsx';

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]