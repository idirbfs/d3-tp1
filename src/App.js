import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setData } from "./actions/data.action";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Nav from "./components/Nav.jsx";
import Data from "./components/Data.jsx";
import Graphs from "./components/Graphs.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Data />} />
    <Route path="/graphs" element={<Graphs />} />
  </Routes>
);
function App({ setData }) {
  useEffect(() => {
    setData();
  }, [setData]);
  return (
    <BrowserRouter>
      <Nav />
      <AppRoutes />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

App.propTypes = {
  setData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { setData })(App);
