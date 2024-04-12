import { useState } from 'react';
import BookTable from '../../../components/book-table/book-table.jsx';
import SearchBar from '../../../components/searchBar/SearchBar.jsx';
import bookData from '../../../data/books.json'

const BookTablePage = () => {
    const [books, setBooks] = useState(bookData)

    const handleSearch = (search) => {
        setBooks(books => {

            const listBooksFilter = bookData.filter(book => 
                book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
            
            )

            return listBooksFilter;
        })
    }


    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <BookTable books={books} />

        </>
    )
}

export default BookTablePage;