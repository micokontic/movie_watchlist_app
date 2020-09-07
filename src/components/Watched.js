import React, { useContext } from "react";
import { globalContext } from "../context/globalState.js";
import MovieCard from "./MovieCard.js";

function Watched() {
  const context = useContext(globalContext);
  const watched = context.watched;

  return (
    <div class="movie-page">
      <div class="container">
        <div class="header">
          <h1 class="header">My watched movies</h1>
          <span class="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => {
              return <MovieCard movie={movie} type={"watched"} />;
            })}
          </div>
        ) : (
          <h2 className="no-movies">No movies that you watched!</h2>
        )}
      </div>
    </div>
  );
}

export default Watched;
