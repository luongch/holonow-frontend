import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div >
      <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
      }}>
        <Link to="live">Live</Link> |{" "}
        <Link to="videos">Videos</Link> |{" "}
        <Link to="about">About</Link>        
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
