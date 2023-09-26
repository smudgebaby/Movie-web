import "./LikeMovieListCard.css";

const BlockedMovieListCard = (props) => {
  const imgUrl = "https://image.tmdb.org/t/p/original";

  function handleUnblock() {
    props.addUnBlock(props.id);
  }

  function handleLike() {
    props.addLike(props.id);
  }

  return (
    <div className="movie-card">
      <img src={imgUrl + props.poster_path} alt="poster" />

      <div className="buttons">
        <button onClick={handleLike} class="btn btn-outline-dark">
          Like
        </button>
        <button onClick={handleUnblock} class="btn btn-secondary">
          Unblock
        </button>
      </div>
    </div>
  );
};

export default BlockedMovieListCard;
