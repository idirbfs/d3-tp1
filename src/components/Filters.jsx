import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import { fetchData } from "../utils/d3";

export default function Filters() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      const data = await fetchData();
      setUserData(data);
    };

    fetchCSVData();
  }, []);
  const [filters, setFilters] = useState({
    fonction: [],
    moyensTransport: [],
    departementResidence: [],
    dureeTrajet: [],
  });

  const handleCheckboxChange = (category, value) => {
    // Clone the current state to avoid mutation
    const newFilters = { ...filters };
    console.log("working");

    // Check if the value is already in the array
    const index = newFilters[category].indexOf(value);

    if (index === -1) {
      // If not present, add the value
      newFilters[category] = [...newFilters[category], value];
    } else {
      // If already present, remove the value
      newFilters[category] = [
        ...newFilters[category].slice(0, index),
        ...newFilters[category].slice(index + 1),
      ];
    }

    // Update the state
    setFilters(newFilters);
  };
  return (
    <div className="row p-2 border mb-2">
      <div className="col-md-3">
        <div className="block">
          <h5>Fonction</h5>
          <CheckBox
            label="Etudiant"
            onChange={() => handleCheckboxChange("fonction", "Etudiant")}
          />
          <CheckBox
            label="Enseignant"
            onChange={() => handleCheckboxChange("fonction", "Enseignant")}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="block">
          <h5>Moyens de transport</h5>
          <CheckBox label="Transports en commun" />
          <CheckBox label="Voiture" />
          <CheckBox label="Vélo" />
          <CheckBox label="Aucun" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="block">
          <h5>Département de résidence</h5>
          <CheckBox label="75" />
          <CheckBox label="91" />
          <CheckBox label="92" />
          <CheckBox label="93" />
          <CheckBox label="94" />
          <CheckBox label="95" />
          <CheckBox label="77" />
          <CheckBox label="78" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="block">
          <h5>Durée du trajet</h5>
          <CheckBox label="0-15 min" />
          <CheckBox label="15-30 min" />
          <CheckBox label="30-45 min" />
          <CheckBox label="45-60 min" />
          <CheckBox label="60-75 min" />
          <CheckBox label="75-90 min" />
        </div>
      </div>
    </div>
  );
}
