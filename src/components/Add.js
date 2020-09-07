import React, { useState } from "react";
import ResultCard from "./ResultCard.js";
function Add() {
  const [query, setQuery] = useState();
  const [results, setResults] = useState([]);
  const onChange = (e) => {
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=2a78ad2f9fc27a2417c7790b3835f4be&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(results);
        } else {
          setResults({});
        }
      });
  };
  return (
    <div>
      <div class="add-page">
        <div class="container">
          <div class="add-content">
            <div class="input-wrapper">
              <input
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={onChange}
              ></input>
            </div>
            {results.length > 0 && (
              <ul>
                {results.map((result) => {
                  return (
                    <div>
                      <ResultCard key={result.id} movie={result} />
                    </div>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
