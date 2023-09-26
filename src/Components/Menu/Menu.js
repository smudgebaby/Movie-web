import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <header>
      <h1>Our Top Rated Movies List</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/MovieList">Movie List</NavLink>
          </li>
          <li>
            <NavLink to="/MovieList/LikeMovieList">Liked Movies</NavLink>
          </li>
          <li>
            <NavLink to="MovieList/BlockedMovieList">Blocked Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
