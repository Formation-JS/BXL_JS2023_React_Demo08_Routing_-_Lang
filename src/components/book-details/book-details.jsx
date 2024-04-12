

const BookDetails = ({book}) => {
    return (
        <>

            <p>{book.name}</p>
            <p>{book.desc}</p>
            <p>{book.price}</p>
            <p>{book.categorie}</p>
            
        </>
    )
}
export default BookDetails;