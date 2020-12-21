import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="App container">
      <Header title="Ma bibliothèque de films" />
      <MovieCard
        title="Inception"
        poster="https://m.media-amazon.com/images/I/51ShRC1YMrL._AC_SS350_.jpg"
        description="Un film de S-F"
      />
      <MovieCard
        title="Avatar"
        poster="https://cdn.shopify.com/s/files/1/1416/8662/products/avatar_2009_british_quad_teaser_original_film_art_a.jpg?v=1562542843"
        description="Un film avec des aliens bleus"
      />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}

export default App;
