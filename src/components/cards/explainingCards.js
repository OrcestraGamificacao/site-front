import "./Cards";
import React from "react";
import Cards from "./Cards";
import "./explainingCards.css"
function ExplainingCards() {
  const secondbg = require("../../assets/images/greenBack.svg");
  return (
    <div className="card-background">
      <img className="card-image" src={secondbg} />
      <div className="layer-card">
          <h2 className="explain-card-title mb-4 ">Benefícios da Gamificação</h2>
          <Cards />
      </div>
    </div>
  );
}
export default ExplainingCards;
