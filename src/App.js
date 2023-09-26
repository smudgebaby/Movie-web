import "./App.css";
import React from "react";
import Menu from "./Components/Menu/Menu";
import { Routes, Route } from "react-router-dom";
import MovieList from "./Containers/MovieList";
import Home from "./Containers/Home";
import LikeMovieList from "./Containers/LikeMovieList";
import BlockedMovieList from "./Containers/BlockedMovieList";
import NotFound from "./Containers/NotFound";

export default function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MovieList" element={<MovieList />} />
          <Route path="/MovieList/LikeMovieList" element={<LikeMovieList />} />
          <Route
            path="/MovieList/BlockedMovieList"
            element={<BlockedMovieList />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
