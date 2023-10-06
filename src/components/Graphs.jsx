import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { convertToChartData } from "../utils/graph";
import { connect } from "react-redux";
import PropTypes from "prop-types";

ChartJS.register(ArcElement, Tooltip, Legend);

function Graphs({ data }) {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Réponses du Questionnaire de Transport
      </h2>

      <div className="row">
        <div className="col-md-3">
          <h5 className="text-center">Fonction</h5>
          <Pie data={convertToChartData(data, "fonction")} />
        </div>
        <div className="col-md-3">
          <h5 className="text-center">Moyens de transport</h5>
          <Pie data={convertToChartData(data, "moyenTransport")} />
        </div>
        <div className="col-md-3">
          <h5 className="text-center">Département de résidence</h5>
          <Pie data={convertToChartData(data, "departementResidence")} />
        </div>
        <div className="col-md-3">
          <h5 className="text-center">Durée de trajet</h5>
          <Pie data={convertToChartData(data, "dureeTrajet")} />
        </div>
      </div>
    </div>
  );
}

Graphs.propTypes = {
  data: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({ data: state.dataReducer });

export default connect(mapStateToProps, {})(Graphs);
