import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {
    movies.map(movie=>(
      <div key={movie.title}>
        <h2>Name:{movie.title}</h2>
        <p>Time{movie.time}</p>
        <p>Genres:</p>
        {
          movie.genres.map(genre=>(
            <p key={genre}>{genre}</p>
          ))
        }
      </div>
    ))

    }
    
  </div>);
}

export default Movies;
