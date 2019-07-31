import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Swal from 'sweetalert2'
import styled from 'styled-components'


const H5 = styled.h5`
color:	#B22222;
font-size: 2rem;
`
const TipFormLabel = styled.label`
  color: #f3e367;
  font-size: 3.2rem;
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
  padding: 1.6rem 2.8rem;
  font-size: 1.9rem;
  font-family: 'Ubuntu', sans-serif;
  border-radius: 10px;
  transition: all 200ms ease-out;
  text-decoration: none;
  margin-top: 1rem;
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
`;


function TipForm({ touched, errors }) {

  const style = {
    margin: '0 auto',
    marginTop: '120px',
    width: '800px',
    height: '350px',
    background: '#202020',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <Form style={style}>
    <TipFormLabel htmlFor = "username">Enter tip amount</TipFormLabel>
    <TipFormField id="payment" type="payment" autoComplete="off" placeholder="Amount" name = "payment"/>
     <H5>{touched.payment && errors.username}</H5>
    
    <TipSubmitButton type="submit">Submit</TipSubmitButton>
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
