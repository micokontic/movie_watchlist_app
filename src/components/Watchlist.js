import React, { useContext } from "react";
import { globalContext } from "../context/globalState";
import Watched from "./Watched";
import MovieCard from "./MovieCard.js";
function Watchlist() {
  const context = useContext(globalContext);
  const watchlist = context.watchlist;
  return (
    <div class="movie-page">
      <div class="container">
        <div class="header">
          <h1 class="header">My Watchlist</h1>
          <span class="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => {
              return <MovieCard movie={movie} type={"watchlist"} />;
            })}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your Watch List, add some!</h2>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
