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
        <div>
            <h1>BookShelf</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for books"
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {books.map((book: any) => (
                    <div key={book.id}>
                        <h3>{book.volumeInfo.title}</h3>
                        <Link to={`/book/${book.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
