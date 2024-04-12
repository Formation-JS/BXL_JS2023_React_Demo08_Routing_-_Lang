import App from './App.jsx';
import AboutPage from './pages/about/about.page.jsx';
import BookPage from './pages/books/book.page.jsx';
import BookDetailPage from './pages/books/pages/book-details-page.jsx';
import BookTablePage from './pages/books/pages/book-table.page.jsx';
import BookNotFoundPage from './pages/errors/book-not-found.jsx';
import NotFoundPage from './pages/errors/not-found.page.jsx';
import HomePage from './pages/home/home.page.jsx';

export const routes = [
    {
        path: '/',
        element: <App />, // Le composant App est utilisé comme un layout
        children: [
            {
                index:true,
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            },
            {
                path: 'book',
                element: <BookPage />,
                children: [
                    {
                        index: true,
                        element: <BookTablePage />
                    },
                    {
                        path: ':bookId',
                        element: <BookDetailPage />
                    },
                    {
                        path: 'not-found',
                        element: <BookNotFoundPage />
                    },
                ] 
            }
            
        ]
    },
]
