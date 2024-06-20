import React from "react";
import { Link } from "react-router-dom";

// Home component to render the home page content
export default function Home() {
  return (
    <div className="home-container">
      {/* Main headline */}
      <h1>You got the travel plans, we got the travel vans.</h1>

      {/* Subheadline */}
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      {/* Link to vans page */}
      <Link to="vans">Find your van</Link>
    </div>
  );
}
