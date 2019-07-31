import React,{useState} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Swal from 'sweetalert2'
import styled from 'styled-components'


const H5 = styled.h5`
color:	#B22222;
`


function TipForm({ touched, errors }) {
    const [payment,setPayment] = useState();
 

 

  return (
    <Form>
    <label htmlFor = "username">How much would you like to pay today</label>
    <Field id="payment" type="payment" autoComplete="off" placeholder="Amount" name = "payment"/>
     <H5>{touched.payment && errors.username}</H5>
    
    <button type="submit">Enter Payment :)</button>
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
    // .min(1,"Must tip at least 1 dollar"),
    // .required("Oops please enter a payment amount")

  }),
//    onSubmit(e,{touched}) {
//     e.preventDefault();
//     const obj = {
//         // Total: {state.payment},
//         total: {touched.payment}
        
//       };
//       axios.post('http://localhost:4000/API/tipWorker', obj)
//           .then(res => console.log(res.data));
//     console.log(`The Amount is ${state.payment}`)
//     setPayment({
//         payment:''
     
//     })
//   },
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
