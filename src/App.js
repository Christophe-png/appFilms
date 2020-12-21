import "./App.css";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";

const moviesArray = [
  {
    id: 1,
    title: "Inception",
    poster: "https://m.media-amazon.com/images/I/51ShRC1YMrL._AC_SS350_.jpg",
    description: "Thriller de S-F américano-britannique",
  },
  {
    id: 2,
    title: "Avatar",
    poster:
      "https://cdn.shopify.com/s/files/1/1416/8662/products/avatar_2009_british_quad_teaser_original_film_art_a.jpg?v=1562542843",
    description:
      "film de S-F américain réalisé par james Cameron, sorti en 2009",
  },
  {
    id: 3,
    title: "Interstellar",
    poster:
      "https://ih1.redbubble.net/image.695672348.4846/fposter,small,wall_texture,product,750x1000.u2.jpg",
    description: "film de S-F réalisé par Christopher Nolan, sorti en 2014",
  },
];

const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App container">
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <Header title="Ma bibliothèque de films" />
      {moviesArray.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          description={movie.description}
        />
      ))}
    </div>
  );
}

export default App;
