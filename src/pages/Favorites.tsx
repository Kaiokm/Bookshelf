import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface FavoriteBook {
  id: string;
  title: string;
  authors?: string[];
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<FavoriteBook[]>([]);
  

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    console.log("Favoritos armazenados no localStorage:", storedFavorites); 
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="book-list">
      <h2>Meus Favoritos</h2>
      <Link to="/" className="back-button">
        <button style={{ margin: "10px", padding: "10px" }}>Voltar à Home</button>
      </Link>
      <ul>
        {favorites.length === 0 ? (
          <p>Você ainda não adicionou nenhum livro aos favoritos.</p>
        ) : (
          favorites.map(({ id, title }: any) => (
            <li key={id}>
              <Link to={`/book/${id}`}>{title}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Favorites;
