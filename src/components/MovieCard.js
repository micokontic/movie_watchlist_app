import React from "react";
import MovieControls from "./MovieContols.js";

function MovieCard({ movie, type }) {
  return (
    <div class="movie-card">
      <div class="overlay"></div>
      {console.log(movie.poster_path)}

      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        ></img>
      ) : (
        <div class="filler-poster"></div>
      )}

      <MovieControls type={type} movie={movie} />
    </div>
  );
}

export default MovieCard;
