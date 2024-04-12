import { useState,useCallback } from 'react'

const SearchBar = ({onSearch}) => {

    const [search, setSearch] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onSearch(search)
    }, [search, onSearch]);
    
    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <button type="submit" >Search</button>
        </form>
    )
}
export default SearchBar