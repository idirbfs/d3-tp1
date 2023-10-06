import React from "react";
import CheckBox from "./CheckBox";

export default function Filters({ onFilterChange, filters }) {
  console.log("Current Filters:", filters);
  return (
    <div className="row p-2 border mb-2">
      <div className="col-md-3">
        <div className="block">
          <h5>Fonction</h5>
          <CheckBox
            label="Etudiant"
            onChange={() => onFilterChange("fonction", "Etudiant")}
            checked={filters.fonction.includes("Etudiant")}
          />

          <CheckBox
            label="Enseignant"
            onChange={() => onFilterChange("fonction", "Enseignant")}
            checked={filters.fonction.includes("Enseignant")}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="block">
          <h5>Moyens de transport</h5>
          <CheckBox
            label="Transports en commun"
            onChange={() =>
              onFilterChange("moyenTransport", "Transports en commun")
            }
            checked={filters.moyenTransport.includes("Transports en commun")}
          />
          <CheckBox
            label="Voiture"
            onChange={() => onFilterChange("moyenTransport", "Voiture")}
            checked={filters.moyenTransport.includes("Voiture")}
          />
          <CheckBox
            label="Vélo"
            onChange={() => onFilterChange("moyenTransport", "Vélo")}
            checked={filters.moyenTransport.includes("Vélo")}
          />
          <CheckBox
            label="Aucun"
            onChange={() => onFilterChange("moyenTransport", "Aucun")}
            checked={filters.moyenTransport.includes("Aucun")}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="block">
          <h5>Département de résidence</h5>
          <CheckBox
            label="75"
            onChange={() => onFilterChange("departementResidence", "75")}
            checked={filters.departementResidence.includes("75")}
          />
          <CheckBox
            label="91"
            onChange={() => onFilterChange("departementResidence", "91")}
            checked={filters.departementResidence.includes("91")}
          />
          <CheckBox
            label="92"
            onChange={() => onFilterChange("departementResidence", "92")}
            checked={filters.departementResidence.includes("92")}
          />
          <CheckBox
            label="93"
            onChange={() => onFilterChange("departementResidence", "93")}
            checked={filters.departementResidence.includes("93")}
          />
          <CheckBox
            label="94"
            onChange={() => onFilterChange("departementResidence", "94")}
            checked={filters.departementResidence.includes("94")}
          />
          <CheckBox
            label="95"
            onChange={() => onFilterChange("departementResidence", "95")}
            checked={filters.departementResidence.includes("95")}
          />
          <CheckBox
            label="77"
            onChange={() => onFilterChange("departementResidence", "77")}
            checked={filters.departementResidence.includes("77")}
          />
          <CheckBox
            label="78"
            onChange={() => onFilterChange("departementResidence", "78")}
            checked={filters.departementResidence.includes("78")}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="block">
          <h5>Durée du trajet</h5>
          <CheckBox
            label="0-15 min"
            onChange={() => onFilterChange("dureeTrajet", "0-15 min")}
            checked={filters.dureeTrajet.includes("0-15 min")}
          />
          <CheckBox
            label="15-30 min"
            onChange={() => onFilterChange("dureeTrajet", "15-30 min")}
            checked={filters.dureeTrajet.includes("15-30 min")}
          />
          <CheckBox
            label="30-45 min"
            onChange={() => onFilterChange("dureeTrajet", "30-45 min")}
            checked={filters.dureeTrajet.includes("30-45 min")}
          />
          <CheckBox
            label="45-60 min"
            onChange={() => onFilterChange("dureeTrajet", "45-60 min")}
            checked={filters.dureeTrajet.includes("45-60 min")}
          />
          <CheckBox
            label="60-75 min"
            onChange={() => onFilterChange("dureeTrajet", "60-75 min")}
            checked={filters.dureeTrajet.includes("60-75 min")}
          />
          <CheckBox
            label="75-90 min"
            onChange={() => onFilterChange("dureeTrajet", "75-90 min")}
            checked={filters.dureeTrajet.includes("75-90 min")}
          />
          <CheckBox
            label="> 90 min"
            onChange={() => onFilterChange("dureeTrajet", "> 90 min")}
            checked={filters.dureeTrajet.includes("> 90 min")}
          />
        </div>
      </div>
    </div>
  );
}
