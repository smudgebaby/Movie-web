import React from "react";
import BlockedMovieListCard from "../Components/Card/BlockedMovieListCard";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { blockedToLiked, unblock } from "../Features/AllInOneSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const BlockedMovieList = () => {
  const dispatch = useDispatch();
  const movieInfo = useSelector((state) => state.movieList.movieInfo);
  const blockedIds = useSelector((state) => state.movieList.blocked);
  const blockedInfo = movieInfo.filter((movie) =>
    blockedIds.includes(movie.id)
  );
  const [blockedMovies, setBlockedMovies] = useState(blockedInfo);

  function addLike(id) {
    dispatch(blockedToLiked(id));
    setBlockedMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    );
  }
  function addUnBlock(id) {
    dispatch(unblock(id));
    setBlockedMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    );
  }

  return (
    <div>
      <h5>Blocked Movie List</h5>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {blockedMovies.map((movie) => {
          return (
            <BlockedMovieListCard
              key={nanoid()}
              id={movie.id}
              poster_path={movie.poster_path}
              addLike={addLike}
              addUnBlock={addUnBlock}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlockedMovieList;
