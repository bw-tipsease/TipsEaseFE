import React from "react";
import styled from "styled-components";
import Tip from "./Tip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import posed from "react-pose";

const WorkerCardContainer = styled.div`
  display: flex;
  font-family: "Varela Round", sans-serif;
  align-items: center;
  position: relative;
  width: 100%;
`;

const WorkerImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
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

const WorkerText = styled.p`
  font-size: 2.2rem;
  text-align: left;
  line-height: 3.5rem;
  margin-top: 0;
  margin-bottom: 1.2rem;
`;

const WorkerDuration = styled.p`
  font-size: 2.2rem;
  text-align: left;
  line-height: 3.5rem;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const DeleteButton = styled.button`
  border-radius: 50px;
  background-color: red;
  color: white;
  width: 20px;
  height: 20px;
  font-size: 0.5rem;
  position: absolute;
  top: -1rem;
  right: -1rem;
`;

const WorkerCard = props => {
  
  return (
    <WorkerCardContainer>
      <div className="wrkNameImg">
        <WorkerName>{`${props.worker.first_name} ${props.worker.last_name}`}</WorkerName>
        <WorkerImage src={props.worker.photo_url} />
      </div>
      <DeleteButton onClick={() => props.removeWorker(props.worker.id)}>
        X
      </DeleteButton>

      <WorkerInfo>
        <WorkerText
          style={{
            color: "white",
            fontFamily: `'Ubuntu', sans-serif`,
            letterSpacing: "1px",
            fontSize: "2rem"
          }}
        >
          {props.worker.tagline}
        </WorkerText>
        <WorkerDuration>
          Employed since:
          <br />
          <span style={{ color: "white" }}>{props.worker.start_date}</span>
        </WorkerDuration>
        <Tip />
      </WorkerInfo>
    </WorkerCardContainer>
  );
};

export default WorkerCard;
