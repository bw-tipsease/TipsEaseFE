import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import styled from 'styled-components'


const H5 = styled.h5`
color:	#B22222;
font-size: 2rem;
`

const FormContainer = styled.div`
  margin: 0 auto;
    margin-top: 120px;
    width: 800px;
    height: 350px;
    background: #202020;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2.5rem 0;
`;


const FormLogo = styled.h1`
  font-size: 4rem;
  color: #f3e367;
  margin: 1.5rem auto;
  font-family: "Ubuntu", sans-serif;
  margin-bottom: 1rem;
`;

const TipFormLabel = styled.label`
  color: #c9c9c9;
  font-size: 2.4rem;
  font-family: 'Ubuntu', sans-serif;
  margin: 2rem 0;
`;

const TipFormField = styled(Field)`
  border-radius: 10px;
  border: none;
  padding: 1rem 2rem;
  font-size: 2rem;

  &:focus {
    outline: none;
  }
`;

const TipSubmitButton = styled.button`
  background: none;
  color: #f3e367;
  border: 2px solid #f3e367;
  padding: 1.4rem 2.6rem;
  font-size: 2rem;
  font-family: 'Ubuntu', sans-serif;
  border-radius: 10px;
  transition: all 200ms ease-out;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;

  :hover {
    cursor: pointer;
    background: #f3e367;
    color: black;
  }

  :focus {
      outline: none;
  }

  svg {
    margin-right: 0.3rem;
  }
`;


function TipForm({ touched, errors }) {

  return (
    <Form>
      <FormContainer>
      <FormLogo>tipsEase</FormLogo>
    <TipFormLabel htmlFor = "username">Enter tip amount</TipFormLabel>
    <TipFormField id="payment" type="payment" autoComplete="off" placeholder="Amount" name = "payment"/>
     <H5>{touched.payment && errors.username}</H5>
    <div className='tip-button-container'>
    <TipSubmitButton type="submit"><FontAwesomeIcon icon={faCoins} /> Pay</TipSubmitButton>
    </div>
    </FormContainer>
 </Form> 
 
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
       
        payment: ''
       
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
    .min(1,"Must tip at least 1 dollar")

  }),
  handleSubmit(values, formikBag) {
    

    //   {if(token === null){
    //     Swal.fire({
    //         position: 'center',
    //         type: 'error',
    //         title: 'Try Again!',
    //         showConfirmButton: false,
    //         timer: 2500
    //       })
    //   }else{
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Thanks for your tip',
            showConfirmButton: false,
            timer: 1500
          })
    //   }}

  }
})(TipForm);
