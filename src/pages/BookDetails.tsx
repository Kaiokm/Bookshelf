import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState<any>(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then((response) => response.json())
            .then((data) => setBook(data));
    }, [id]);

    const handleFavorite = () => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        localStorage.setItem('favorites', JSON.stringify([...storedFavorites, id]));
    };


    if (!book) return <div>Carregando...</div>;

    return (
        <div>
            <Link to="/">
                <button style={{ margin: "10px", padding: "10px" }}>Voltar para Home</button>
            </Link>
            <h1>{book.volumeInfo.title}</h1>
            <p>{book.volumeInfo.description}</p>
            <button onClick={handleFavorite}>Add aos favoritos</button>
        </div>
    );
}

export default BookDetails;
