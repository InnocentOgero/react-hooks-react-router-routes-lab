import React from "react";
import { NavLink } from "react-router-dom";

const styleLinks={marginBottom:"10px"}
function NavBar() {
  return (
  <div style={{display:"flex",flexDirection:"column"}}>
    <NavLink
    key="home"
    to="/"
    style={styleLinks}
    activestyle={{color:'blue'}}
    >Home</NavLink>
    <NavLink
    key="movies"
    to="/movies"
    style={styleLinks}
    activestyle={{color:'blue'}}
    
    >Movies</NavLink>
    <NavLink
    key="directors"
    to="/directors"
    style={styleLinks}
    activestyle={{color:'blue'}}
    >Directors</NavLink>
    <NavLink
    key="actors"
    to="/actors"
    style={styleLinks}
    activestyle={{color:'blue'}}
    >Actors</NavLink>
  </div>);
}

export default NavBar;
