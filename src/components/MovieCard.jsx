import "./MovieCard.css";

function MovieCard(props) {
  return (
    <article className="MovieCard">
      <img
        className="MovieCard-poster"
        src="https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png"
        alt="Movie poster"
      />
      <div>
        <h3>Movie title</h3>
        <p>Movie description</p>
      </div>
    </article>
  );
}

export default MovieCard;
