
import React from "react";
import styled from "styled-components";

import {Link} from 'react-router-dom'



const WorkerButton = styled(Link)`
  background: black;
  color: #f3e367;
  border: 1px solid #f3e367;
  padding: 1.2rem 2.4rem;
  font-size: 2rem;
  font-family: 'Ubuntu', sans-serif;
  border-radius: 10px;
  transition: all 250ms ease-out;
  margin-top: 1.4rem;
  text-decoration:none;
  transition: all 250ms ease-out;

  :hover {
    cursor: pointer;
    background: #f3e367;
    color: black;
    transition: all 250ms ease-in-out;
  }

  :focus {
      outline: none;
  }

  svg {
    margin-right: 0.6rem;
  }
`;
//Use react router to make the button go to a new route that renders the CreateWorker.js Component
function CreateWorkerButton() {
    return (
        <div>
        <WorkerButton to='/CreateWorker'>Create New Worker</WorkerButton>   
        </div>
    )
}

export default CreateWorkerButton
