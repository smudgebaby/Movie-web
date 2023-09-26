import React from "react";
import LikeMovieListCard from "../Components/Card/LikeMovieListCard";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unlike, likedToBlocked } from "../Features/AllInOneSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LikeMovieList.css";

const LikeMovieList = () => {
  const dispatch = useDispatch();
  const movieInfo = useSelector((state) => state.movieList.movieInfo);
  const likedIds = useSelector((state) => state.movieList.liked);
  const likedInfo = movieInfo.filter((movie) => likedIds.includes(movie.id));
  const [likedMovies, setLikedMovies] = useState(likedInfo);

  function addUnlike(id) {
    dispatch(unlike(id));
    setLikedMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    );
  }
  function addBlock(id) {
    dispatch(likedToBlocked(id));
    setLikedMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== id)
    );
  }

  return (
    <div>
      <h5>Liked Movie List</h5>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {likedMovies.map((movie) => {
          return (
            <LikeMovieListCard
              key={nanoid()}
              id={movie.id}
              poster_path={movie.poster_path}
              addUnlike={addUnlike}
              addBlock={addBlock}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LikeMovieList;
