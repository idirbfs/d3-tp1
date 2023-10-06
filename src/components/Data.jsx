import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Card from "./Card";
import Filters from "./Filters";

function Data({ data }) {
  const [filters, setFilters] = useState({
    fonction: ["Etudiant", "Enseignant"],
    moyenTransport: ["Transports en commun", "Voiture", "Vélo", "Aucun"],
    departementResidence: ["75", "91", "92", "93", "94", "95", "77", "78"],
    dureeTrajet: [
      "0-15 min",
      "15-30 min",
      "30-45 min",
      "45-60 min",
      "60-75 min",
      "75-90 min",
      "> 90 min",
    ],
  });

  function handleFilterChange(filterType, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((v) => v !== value)
        : [...prevFilters[filterType], value],
    }));
  }

  const filteredData = data.filter((user) => {
    return (
      filters.fonction.includes(user.fonction) &&
      filters.moyenTransport.includes(user.moyenTransport) &&
      filters.departementResidence.includes(user.departementResidence) &&
      filters.dureeTrajet.includes(user.dureeTrajet)
    );
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Moyens de Transport à Paris 8</h2>
      <Filters onFilterChange={handleFilterChange} filters={filters} user />
      <div className="row" id="chart">
        {filteredData.map((user, index) => (
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
  data: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.dataReducer,
});

export default connect(mapStateToProps, {})(Data);
