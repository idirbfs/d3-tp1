import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Card from "./Card";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/d3";
import Filters from "./Filters";
import { setData } from "../actions/data.action";

function Data({ data }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      const dataCSV = await fetchData();
      setUserData(dataCSV);
      console.log(...data);
    };

    fetchCSVData();
  }, [data]);

  return (
    <div className="container">
      <h2 className="mt-3 mb-4">Moyens de Transport à Paris 8</h2>
      <Filters user />
      <div className="row" id="chart">
        {userData.map((user, index) => (
          <Card
            key={index}
            nom={user["nom"]}
            prenom={user["prenom"]}
            imgURL={user["photo"]}
            fonction={user["fonction"]}
            moyensTransport={user["moyenTransport"]}
            departement={user["departementResidence"]}
            duree={user["dureeTrajet"]}
          />
        ))}
      </div>
    </div>
  );
}

Data.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.dataReducer,
});

export default connect(mapStateToProps, { setData })(Data);
