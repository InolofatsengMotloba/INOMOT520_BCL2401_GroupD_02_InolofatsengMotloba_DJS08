import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/src/assets/images/avatar-icon.png";

// The Header component with navigation bar and logo
export default function Header() {
  // Styles to apply to active navigation links
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  // Function to simulate logging out by removing the 'loggedin' item from local storage.
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    // Render the header element.
    <header>
      {/* Link to the home page with the site logo */}
      <Link className="site-logo" to="/">
        #VanLife
      </Link>

      {/* Navigation bar */}
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}
