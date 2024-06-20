import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

// The AuthRequired component checks if the user is logged in before allowing access to protected routes.
export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin"); // Retrieve the login status from local storage.
  const location = useLocation(); // Get the current location to know where the user is trying to access.

  // If the user is not logged in, redirect them to the login page.
  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "You must log in first",
          from: location.pathname,
        }}
        replace
      />
    );
  }

  // If the user is logged in, render the child routes.
  return <Outlet />;
}
