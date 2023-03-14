import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, name, flag_image, continent }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={flag_image} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>Pais : {name}</h3>
        </div>
        <div className="card-body">
          <p>Continente : {continent}</p>
        </div>
      </div>
      <div className="btn">
        <button>
          <Link to={`/home/${id}`}>Ver mas</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
