import React, { useContext } from "react";
import { globalContext } from "../context/globalState.js";

function MovieContols({ movie, type }) {
  const context = useContext(globalContext);
  const removeMovieFromWatchList = context.prop2;
  const addToWatchedList = context.prop3;
  const removeMovieFromWatched = context.prop4;
  const moveMovieToWathcList = context.prop5;
  return (
    <div>
      <div class="inner-card-controls">
        {type === "watchlist" && (
          <>
            <button
              class="ctrl-btn"
              onClick={() => {
                addToWatchedList(movie);
              }}
            >
              <i class="fa-fw far fa-eye"></i>
            </button>
            <button
              class="ctrl-btn"
              onClick={() => {
                removeMovieFromWatchList(movie.id);
              }}
            >
              <i class="fa-fw fa fa-times"></i>
            </button>
          </>
        )}
        {type === "watched" && (
          <>
            <button
              className="ctrl-btn"
              onClick={() => {
                moveMovieToWathcList(movie);
              }}
            >
              <i class="fas fa-eye-slash"></i>
            </button>

            <button
              className="ctrl-btn"
              onClick={() => {
                removeMovieFromWatched(movie.id);
              }}
            >
              <i class="fa-fw fa fa-times"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieContols;
