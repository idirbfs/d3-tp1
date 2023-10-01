import React from "react";

const UserProfileCard = (props) => {
  return (
    <div className="card col-md-4">
      <img src={props.imgURL} className="card-img-top" alt="User" />
      <div className="card-body">
        <h5 className="card-title">
          {props.nom} {props.prenom}
        </h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Fonction:</strong> {props.fonction}
          </li>
          <li className="list-group-item">
            <strong>Moyen de transport:</strong> {props.moyensTransport}
          </li>
          <li className="list-group-item">
            <strong>Département:</strong> {props.departement}
          </li>
          <li className="list-group-item">
            <strong>Temps nécessaire:</strong> {props.duree}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfileCard;
