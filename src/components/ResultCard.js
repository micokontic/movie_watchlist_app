import React, { useContext } from "react";
import { globalContext } from "../context/globalState";

function ResultCard({ movie }) {
  const object = useContext(globalContext);
  const addMovieToWatch = object.prop1;
  const watchlist = object.watchlist;
  const watched = object.watched;
  const addToWatchedList = object.prop3;

  let movieRepeatsWatchlist = watchlist.find((o) => o.id === movie.id);
  let movieRepeatsWatched = watched.find((o) => o.id === movie.id);

  let storedMovie = movieRepeatsWatchlist || movieRepeatsWatched ? true : false;

  return (
    <div>
      <div class="result-card">
        <div class="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            ></img>
          ) : (
            <div class="filler-poster"></div>
          )}
        </div>
        <div class="info">
          <div class="header">
            <h3 class="title">{movie.title}</h3>
            <h4 className="release-date">
              {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
            </h4>
          </div>
          <div className="controls">
            <button
              class="btn"
              disabled={storedMovie}
              onClick={() => {
                if (storedMovie) {
                } else {
                  addMovieToWatch(movie);
                }
              }}
            >
              Add to Watchlist
            </button>
            <button
              class="btn"
              disabled={movieRepeatsWatched}
              onClick={() => {
                if (movieRepeatsWatched) {
                } else {
                  addToWatchedList(movie);
                }
              }}
            >
              Add to Watched
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
