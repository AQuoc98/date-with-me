import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="relative overflow-hidden h-screen">
      <Outlet />
    </div>
  );
}

export default App;
