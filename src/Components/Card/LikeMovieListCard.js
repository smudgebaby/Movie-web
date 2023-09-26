import "./LikeMovieListCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LikeMovieListCard = (props) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  function handleUnlike() {
    props.addUnlike(props.id);
  }

  function handleBlock() {
    props.addBlock(props.id);
  }

  return (
    <div className="movie-card">
      <img src={imgUrl + props.poster_path} alt="poster" />

      <div className="buttons">
        <button onClick={handleUnlike} class="btn btn-secondary">
          Unlike
        </button>
        <button onClick={handleBlock} class="btn btn-outline-dark">
          Block
        </button>
      </div>
    </div>
  );
};

export default LikeMovieListCard;
