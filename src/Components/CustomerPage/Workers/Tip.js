import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { Route, Link } from "react-router-dom";
import posed from "react-pose";
import TipForm from "./TipForm";

const TipButton = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0px 1px 10px #B1B7B7 "
  },
  press: {
    scale: 1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

function Tip() {
  //Fancy JS Logic

  return (
    <div>
      <TipButton className="tipButton" to="/TipForm">
        <FontAwesomeIcon icon={faCoins} />
        Add Tip
      </TipButton>
    </div>
  );
}

export default Tip;
