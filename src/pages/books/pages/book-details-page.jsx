import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import books from '../../../data/books.json';
import BookDetails from '../../../components/book-details/book-details.jsx';
import { useEffect } from 'react';

const BookDetailPage = () => {
    const {t} = useTranslation();
    const { bookId } = useParams();
    const navigate = useNavigate();

    const redirect = () => {
        navigate(-1) // Permet de retourner une case en arrière dans l'historique
    };

    const book = books.find(book => book.id == parseInt(bookId));
    useEffect(()=> {

        if (!book) {
            navigate('../not-found');
        }
    }, [book])

    return (
        <>
            <h2>{ t('book.detail.title').replace("{BookId}", bookId)}</h2>
            <button onClick={redirect}>Back</button>
            {book &&  <BookDetails book={book}/>}
           

        </>
    )
}
export default BookDetailPage;