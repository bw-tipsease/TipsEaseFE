import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import TipForm from './TipForm'


const TipButton = styled(Link)`
  background: none;
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



function Tip() {
    //Fancy JS Logic
    
    return (
      <div>
        <TipButton to ='/TipForm'><FontAwesomeIcon icon={faCoins} />Add Tip</TipButton>
   
        
        </div>
        )
    
}

export default Tip
