import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        setBooks(response.data.items || []);
    };

    return (
        <div className='home'>
            <h1>BookShelf</h1>
            <form onSubmit={handleSearch}>
                <input 
                className='search-bar-input'
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Procurar por livros"
                />
                <button type="submit" className='search-bar-button'>Pesquisar</button>
            </form>
            <div className='book-list'>
                {books.map((book: any) => (
                    <div key={book.id}>
                        <h3>{book.volumeInfo.title}</h3>
                        <Link to={`/book/${book.id}`}>Ver Detalhes</Link>
                    </div>
                ))}
                <div className='favorite-button'>
                <Link to="/favorites">
                <button style={{ margin: "10px", padding: "10px" }}>Ver Favoritos</button>
            </Link>
            </div>
            </div>
        </div>
    );
}

export default Home;
