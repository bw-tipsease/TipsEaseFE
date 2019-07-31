import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import posed from "react-pose";

const WorkerCardContainer = styled.div`
  display: flex;
  font-family: "Varela Round", sans-serif;
  align-items: center;
`;

const WorkerImage = styled.div`
  width: 60%;
  height: 200px;
  border-radius: 5px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const WorkerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 3.2rem;
`;

const WorkerName = styled.h2`
  font-size: 3.5rem;
  margin: 1rem 0;
  color: #f3e367;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 2px;
`;

const WorkerDuration = styled.p`
  font-size: 2.2rem;
  text-align: left;
  line-height: 3.5rem;
  margin-top: 0;
  margin-bottom: 2rem;
`;

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

const WorkerCard = ({ name, workDuration, image }) => {
  return (
    <WorkerCardContainer>
      <WorkerImage image={image} />

      <WorkerInfo>
        <WorkerName>{name}</WorkerName>
        <WorkerDuration>
          Employed for:
          <br />
          <span style={{ color: "white" }}>{workDuration}</span>
        </WorkerDuration>
        <TipButton className="animButton">
          <FontAwesomeIcon icon={faCoins} />
          Add Tip
        </TipButton>
      </WorkerInfo>
    </WorkerCardContainer>
  );
};

export default WorkerCard;
