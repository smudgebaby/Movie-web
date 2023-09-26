import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { like, unlike, block, update } from "../Features/AllInOneSlice";
import MovieListCard from "../Components/Card/MovieListCard";
import { nanoid } from "nanoid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MovieList.css";

const MovieList = () => {
  const [curpage, setCurpage] = useState(1);
  const [curMovies, setCurMovies] = useState([]);
  const [realData, setRealData] = useState([]);
  const [sortBy, setSortBy] = useState("None");

  const fetchurl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=86114ad4ef0d64d69fc3890cc82c2f14&language=en-US&page=";
  const movieInfo = useSelector((state) => state.movieList.movieInfo);
  const liked = useSelector((state) => state.movieList.liked);
  const blocked = useSelector((state) => state.movieList.blocked);
  const dispatch = useDispatch();

  // Update data when first render and page changed
  useEffect(() => {
    if (movieInfo.length < curpage * 20) {
      fetch(fetchurl + curpage)
        .then((response) => response.json())
        .then((data) => {
          const temp = data.results;
          dispatch(update(temp));
          setCurMovies(temp);
          setSortBy("None");
        });
    } else {
      const temp = movieInfo.slice((curpage - 1) * 20, curpage * 20 + 1);
      setCurMovies(temp);
      setSortBy("None");
    }
  }, [curpage]);

  // Update data when liked/blocked movies changed
  useEffect(() => {
    let temp = [...curMovies].filter((movie) => !blocked.includes(movie.id));
    const renderMovie = temp.map((movie) => {
      let likeStatus = false;
      if (liked.includes(movie.id)) {
        likeStatus = true;
      }
      return (
        <MovieListCard
          key={nanoid()}
          id={movie.id}
          image={movie.poster_path}
          title={movie.title}
          rate={movie.vote_average}
          release_date={movie.release_date}
          vote_count={movie.vote_count}
          overview={movie.overview}
          liked={likeStatus}
          onUnlike={onUnlike}
          onLike={onLike}
          onBlock={onBlock}
        />
      );
    });
    setRealData(renderMovie);
  }, [liked, blocked, curMovies]);

  // Update data when sort filter changed
  useEffect(() => {
    let toSort = [...curMovies];
    if (sortBy === "Title") {
      setCurMovies(toSort.sort((a, b) => b.title.localeCompare(a.title)));
    } else if (sortBy === "Rate") {
      setCurMovies(toSort.sort((a, b) => b.vote_average - a.vote_average));
    } else if (sortBy === "ReleaseDate") {
      setCurMovies(
        toSort.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        )
      );
    } else if (sortBy === "VoteCount") {
      setCurMovies(toSort.sort((a, b) => b.vote_count - a.vote_count));
    }
  }, [sortBy]);

  // console.log(realData);

  // Page up and down
  function pageUp() {
    setCurpage((prevPage) => prevPage + 1);
  }
  function pageDown() {
    setCurpage((prevPage) => prevPage - 1);
  }

  // Like, Unnlike, block movie
  function onUnlike(id) {
    dispatch(unlike(id));
  }
  function onLike(id) {
    dispatch(like(id));
  }
  function onBlock(id) {
    dispatch(block(id));
    dispatch(unlike(id));
  }

  // set sort by filter
  function filterByTitle() {
    if (sortBy === "Title") {
      setCurMovies([...curMovies].reverse());
    } else {
      setSortBy("Title");
    }
  }
  function filterByRate() {
    if (sortBy === "Rate") {
      setCurMovies([...curMovies].reverse());
    } else {
      setSortBy("Rate");
    }
  }
  function filterByReleaseDate() {
    if (sortBy === "ReleaseDate") {
      setCurMovies([...curMovies].reverse());
    } else {
      setSortBy("ReleaseDate");
    }
  }
  function filterByVoteCount() {
    if (sortBy === "VoteCount") {
      setCurMovies([...curMovies].reverse());
    } else {
      setSortBy("VoteCount");
    }
  }

  return (
    <div>
      <div className="pagination">
        {curpage === 1 ? (
          <button disabled class="btn btn-outline-dark">
            -
          </button>
        ) : (
          <button onClick={pageDown} class="btn btn-outline-dark">
            -
          </button>
        )}
        <span className="pageNum">{curpage}/1000 page</span>
        {curpage === 1000 ? (
          <button disabled class="btn btn-outline-dark">
            +
          </button>
        ) : (
          <button onClick={pageUp} class="btn btn-outline-dark">
            +
          </button>
        )}
      </div>

      <div className="filters">
        <button onClick={filterByTitle} class="btn btn-light">
          Title
        </button>
        <button onClick={filterByRate} class="btn btn-light">
          Rate
        </button>
        <button onClick={filterByReleaseDate} class="btn btn-light">
          Release Date
        </button>
        <button onClick={filterByVoteCount} class="btn btn-light">
          Vote Count
        </button>
      </div>
      <div
        className={"container-fluid d-flex flex-wrap justify-content-center "}
      >
        {realData}
      </div>
    </div>
  );
};

export default MovieList;
