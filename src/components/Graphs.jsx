import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { fetchData } from "../utils/d3";
import { convertToChartData } from "../utils/graph";

ChartJS.register(ArcElement, Tooltip, Legend);

function Graphs() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchCSVData = async () => {
      const data = await fetchData();
      setUserData(data);
    };
    fetchCSVData();
  }, [userData]);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Réponses du Questionnaire de Transport
      </h2>

      <div className="row">
        <div className="col-md-3">
          <h5 className="text-center">Fonction</h5>
          <Pie data={convertToChartData(userData, "fonction")} />
        </div>
        <div className="col-md-3">
          <h5 className="text-center">Moyens de transport</h5>
          <Pie data={convertToChartData(userData, "moyenTransport")} />
        </div>
        <div className="col-md-3">
          <h5 className="text-center">Département de résidence</h5>
          <Pie data={convertToChartData(userData, "departementResidence")} />
        </div>
        <div className="col-md-3">
          <h5 className="text-center">Durée de trajet</h5>
          <Pie data={convertToChartData(userData, "dureeTrajet")} />
        </div>
      </div>
    </div>
  );
}

export default Graphs;
