import React, { useEffect, useState } from 'react';

function Favorites() {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    return (
        <div>
            <h1>Favorites</h1>
            <ul>
                {favorites.map((id) => (
                    <li key={id}>{id}</li>
                ))}
            </ul>
        </div>
    );
}

export default Favorites;
