import React, { createContext, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
// import { AppReducer } from "./AppReducer.js";
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],

  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const globalContext = createContext(initialState);

//provider component

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_TO_WATCHED_LIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "REMOVE_FROM_WATCHED_LIST":
      return {
        ...state,
        watched: state.watched.filter((movie) => {
          return movie.id !== action.payload;
        }),
      };
    case "MOVE_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter((movie) => {
          return movie.id !== action.payload.id;
        }),
        watchlist: [action.payload, ...state.watchlist],
      };

    default:
      return state;
  }
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const addToWatchedList = (movie) => {
    dispatch({ type: "ADD_TO_WATCHED_LIST", payload: movie });
  };
  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED_LIST", payload: id });
  };
  const moveMovieToWathcList = (movie) => {
    dispatch({ type: "MOVE_MOVIE_TO_WATCHLIST", payload: movie });
  };
  return (
    //actions

    <globalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        prop1: addMovieToWatchList,
        prop2: removeMovieFromWatchList,
        prop3: addToWatchedList,
        prop4: removeMovieFromWatched,
        prop5: moveMovieToWathcList,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};
