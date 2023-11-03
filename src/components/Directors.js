import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {
      directors.map(director=>(
        <div key={director.name}>
          <h2>Name:{director.name}</h2>
          <p>Movies:</p>
          {
            director.movies.map(movie=>(
              <p key={movie}>{movie}</p>
            ))
          }
          {

          }
        </div>
        )
      
        )
    
    }
  </div>);
}

export default Directors;
