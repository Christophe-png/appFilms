import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard(props) {
  return (
    <article className="MovieCard">
      <img className="MovieCard-poster" src={props.poster} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </article>
  );
}

MovieCard.defaultProps = {
  poster:
    "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png",
  title: "Insert title",
  description: "Insert description",
};

MovieCard.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  description: PropTypes.string,
};

export default MovieCard;
