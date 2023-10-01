import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav.jsx";
import Data from "./components/Data.jsx";
import Graphs from "./components/Graphs.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Data />} />
    <Route path="/graphs" element={<Graphs />} />
  </Routes>
);
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
