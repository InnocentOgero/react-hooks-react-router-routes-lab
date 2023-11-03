import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {
      actors.map(actor=>(
        <div key={actor.name}>
          <h2>Name:{actor.name}</h2>
          <p>Movies:</p>
          {
            actor.movies.map(movie=>(
              <p key={movie}>{movie}</p>
            ))
          }
        </div>
      ))

    }
    </div>;
}

export default Actors;
