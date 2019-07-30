import React from "react";
import styled from "styled-components";
import Tip from './Tip'

const WorkerCardContainer = styled.div`
  display: flex;
  font-family: 'Varela Round', sans-serif;
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
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 2px;
`;

const WorkerText = styled.p`
  font-size: 2.2rem;
  text-align: left;
  line-height: 3.5rem;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const WorkerCard = props => {

  return (
    <WorkerCardContainer>
      <WorkerImage image='https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      
      <WorkerInfo>
        <WorkerName>Colin de Vries</WorkerName>
        <WorkerText>Employed for:<br /><span style={{color: 'white'}}>1 year, 2 months, 12 days</span></WorkerText>
        <Tip />
      </WorkerInfo>
    </WorkerCardContainer>
  );
}

export default WorkerCard;