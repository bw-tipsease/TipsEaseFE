import React from "react";
import styled from "styled-components";
import Tip from './Tip'


const WorkerCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Varela Round', sans-serif;
  align-items: center;
  justify-content: center;
`;

const WorkerImage = styled.div`
  height: 175px;
  width: 200px;
  border-radius: 5px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 12px 0px #383838;
`;

const WorkerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3.5rem;
  `;

const WorkerName = styled.h2`
  font-size: 3.4rem;
  margin: 0.5rem 0;
  color: #f3e367;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 2px;
  width: 100%;
  text-align: left;
  padding: 0 1.5rem;
`;

const WorkerProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  width: 90%;
`;

const WorkerText = styled.p`
  font-size: 2rem;
  text-align: left;
  line-height: 3.2rem;
  margin-top: 0;
  margin-bottom: 1.2rem;
`;

const WorkerRole = styled(WorkerText)`
  font-size: 2.4rem;
  color: white;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 1px;
`;

const WorkerEmployment = styled(WorkerText)`
  color: white;
  font-size: 2.4rem;
`;

const WorkerCard = ({ image, firstName, lastName, role, timeEmployed }) => {

  return (
    <WorkerCardContainer>
      <WorkerName>{firstName} {lastName}</WorkerName>
      
      <WorkerProfile>
      <WorkerImage image={image} />
      <WorkerInfo>
        <WorkerRole>Bartender</WorkerRole>
        <WorkerText>Employed for<br /><WorkerEmployment>1 year, 2 months</WorkerEmployment></WorkerText>
        <Tip />
        </WorkerInfo>
      </WorkerProfile>
    </WorkerCardContainer>
  );
}

export default WorkerCard;