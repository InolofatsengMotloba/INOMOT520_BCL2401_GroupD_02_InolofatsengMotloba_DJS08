import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// HostLayout component with a layout of the navigation for host-related pages
export default function HostLayout() {
  // Styles to apply to active navigation links
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      {/* Navigation bar for the host layout */}
      <nav className="host-nav">
        {/* Link to the dashboard */}
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>

        {/* Link to the income page */}
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>

        {/* Link to the vans page */}
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>

        {/* Link to the reviews page */}
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>

      {/* Render the matched child route components */}
      <Outlet />
    </>
  );
}
