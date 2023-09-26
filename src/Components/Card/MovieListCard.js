import "./MovieListCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieListCard = (props) => {
  function handleUnlike() {
    props.onUnlike(props.id);
  }
  function handleLike() {
    props.onLike(props.id);
  }
  function handleBlock() {
    props.onBlock(props.id);
  }

  return (
    <div className="movie-card-container">
      <img
        className="poster"
        src={"https://image.tmdb.org/t/p/w300" + props.image}
        alt="movie-poster"
      />

      <div className="info">
        <div className="infoTop">
          <button
            type="button"
            class="tooltip-button btn btn-outline-primary btn-sm"
            data-toggle="tooltip"
            data-placement="bottom"
            title={props.overview}
          >
            i
          </button>
          <h3>{props.title}</h3>
          <span className="rate">{props.rate}</span>
        </div>

        <div className="buttons">
          {props.liked ? (
            <button class="btn btn-secondary" onClick={handleUnlike}>
              Unlike
            </button>
          ) : (
            <button class="btn btn-outline-dark" onClick={handleLike}>
              Like
            </button>
          )}
          <button class="btn btn-outline-dark" onClick={handleBlock}>
            Block
          </button>
        </div>
        <div className="release-date">Release Date: {props.release_date}</div>
        <div className="vote-count">Vote Count: {props.vote_count}</div>
      </div>
    </div>
  );
};

export default MovieListCard;
