import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"; // Importing the Header component
import Footer from "./Footer"; // Importing the Footer component

// Layout component to define the basic structure of the site layout
export default function Layout() {
  return (
    <div className="site-wrapper">
      {/* Header component */}
      <Header />

      <main>
        {/* child routes/components */}
        <Outlet />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
