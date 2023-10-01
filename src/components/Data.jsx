import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { fetchData } from "../utils/d3";
import Filters from "./Filters";

function Data() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      const data = await fetchData();
      setUserData(data);
    };

    fetchCSVData();
  }, []);
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

export default Data;
