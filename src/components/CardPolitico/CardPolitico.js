import React from "react";
import { Link } from "react-router-dom";
import './cardPolitico.css'

const CardPolitico = props => {
  return (
    <Link className="card-slider" to={props.politician+ props.id}><div style={{backgroundImage: `url(${props.backImage})`}} className="card">
      <div className="elipse"></div>
    </div></Link>
  );
};

export default CardPolitico;
