import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'


const WorkerCardContainer = styled.div`
  display: flex;
  font-family: 'Varela Round', sans-serif;
  align-items: center;
`;

const WorkerImage = styled.img`
  width: 180px;
  height: 180px;
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
  font-style: italic;
  letter-spacing: 1px;
`;

const WorkerDuration = styled.p`
  font-size: 2.2rem;
  text-align: left;
  line-height: 3.5rem;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const TipButton = styled.button`
  background: #f3e367;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 2rem;
  font-family: 'Ubuntu', sans-serif;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }

  svg {
    margin-right: 0.6rem;
  }
`;

const WorkerCard = props => {
  return (
    <WorkerCardContainer>
      <WorkerImage src='https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      
      <WorkerInfo>
        <WorkerName>Colin de Vries</WorkerName>
        <WorkerDuration>Employed for:<br /><span style={{color: 'white'}}>1 year, 2 months, 12 days</span></WorkerDuration>
        <TipButton><FontAwesomeIcon icon={faCoins} />Add Tip</TipButton>
      </WorkerInfo>
    </WorkerCardContainer>
  );
}

export default WorkerCard;