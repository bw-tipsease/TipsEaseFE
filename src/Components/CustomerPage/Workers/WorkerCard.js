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
  width: 90%;
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
  if (props.image) {
    return (
      <>
        <WorkerCardContainer>
          <WorkerName>{props.name}</WorkerName>
          <WorkerImage src={URL.createObjectURL(props.image)} />

          <DeleteButton onClick={() => props.removeWorker(props.id)}>
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
              {props.workType}
            </WorkerText>
            <WorkerDuration>
              Employed for:
              <br />
              <span style={{ color: "white" }}>{props.workDuration}</span>
            </WorkerDuration>
            <Tip />
          </WorkerInfo>
        </WorkerCardContainer>
      </>
    );
  }
  return (
    <WorkerCardContainer>
      <div className="wrkNameImg">
        <WorkerName>{props.name}</WorkerName>
        <WorkerImage src="https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <DeleteButton onClick={() => props.removeWorker(props.id)}>
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
          {props.workType}
        </WorkerText>
        <WorkerDuration>
          Employed for:
          <br />
          <span style={{ color: "white" }}>{props.workDuration}</span>
        </WorkerDuration>
        <Tip />
      </WorkerInfo>
    </WorkerCardContainer>
  );
};

export default WorkerCard;
