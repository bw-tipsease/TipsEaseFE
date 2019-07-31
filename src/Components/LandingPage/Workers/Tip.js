import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


const TipButton = styled(Link)`
  background: none;
  color: #f3e367;
  border: 1px solid #f3e367;
  padding: 1.2rem 2.4rem;
  font-size: 2rem;
  font-family: 'Ubuntu', sans-serif;
  border-radius: 10px;
  transition: all 250ms ease-out;
  text-decoration: none;
  margin-top: 1.5rem;

  :hover {
    cursor: pointer;
    background: #f3e367;
    color: black;
  }

  :focus {
      outline: none;
  }

  svg {
    margin-right: 0.8rem;
  }
`;



function Tip() {
    //Fancy JS Logic
    
    return (
        <TipButton to ='/TipForm'><FontAwesomeIcon icon={faCoins} />Add Tip</TipButton>
        )
    
}

export default Tip
