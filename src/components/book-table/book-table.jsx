import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const BookTable = ({ books }) => {
    const {t} = useTranslation();

    return (
        <table>
            <thead>
                <tr>
                    <th>{t('book.table.name')}</th>
                    <th>{t('book.table.price')}</th>
                    <th>{t('book.table.category')}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.name}</td>
                        <td>{book.price}€</td>
                        <td>{book.categorie}</td>
                        <td>
                            <Link to={`${book.id}`}><button>{t('book.table.detail')}</button></Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BookTable;