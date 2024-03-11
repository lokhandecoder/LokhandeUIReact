import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClippedDrawer from "./Components/Fixed/ClippedDrawer";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./RoutingPages/PageRoutes";

function App() {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
