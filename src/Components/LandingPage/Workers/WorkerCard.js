import React from "react";
import styled from "styled-components";
import Tip from './Tip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const WorkerCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Varela Round', sans-serif;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const WorkerImage = styled.div`
  height: 185px;
  width: 200px;
  border-radius: 5px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 12px 0px #383838;

  @media (max-width: 600px) {
    width: 140px;
    height: 90px;
    margin: 0 auto;
  }
`;

const WorkerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3.5rem;

  @media (max-width: 600px) {
    padding-left: 1.5rem;
  }
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

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const WorkerProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  width: 90%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 1rem;
  }

`;

const WorkerText = styled.p`
  font-size: 1.8rem;
  text-align: left;
  line-height: 3.2rem;
  margin-top: 0;
  margin-bottom: 1.2rem;
  font-family: 'Ubuntu', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

const WorkerRole = styled(WorkerText)`
  font-size: 2.4rem;
  color: white;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 1px;
`;

const WorkerEmployment = styled(WorkerText)`
  color: white;
  font-size: 2.2rem;
  font-family: 'Varela Round', sans-serif;

  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
  
`;

const WorkerCloseButton = styled.button`
  font-size: 2.8rem;
  color: #c9c9c9;
  background: none;
  border: none;
  padding: 0.8rem;
  position: absolute;
  top: 0;
  right: 1rem;

  :hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const WorkerCard = ({ image, firstName, lastName, role, timeEmployed, modal, toggleModal }) => {

  return (
    <WorkerCardContainer>
      <WorkerCloseButton><FontAwesomeIcon icon={faTimes} /></WorkerCloseButton>
      <WorkerName>{firstName} {lastName}</WorkerName>
      
      <WorkerProfile>
      <WorkerImage image={image} />
      <WorkerInfo>
        <WorkerRole>Bartender</WorkerRole>
        <WorkerText>Employed for<br /><WorkerEmployment>1 year, 2 months</WorkerEmployment></WorkerText>
        <Tip toggleModal={toggleModal} />
        </WorkerInfo>
      </WorkerProfile>
    </WorkerCardContainer>
  );
}

export default WorkerCard;