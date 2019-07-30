
import React from 'react'
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2"
import styled from 'styled-components';
 

const H5 = styled.h5`
color:	#B22222;
`


 function SignUp({errors,touched}) {
    return (
        
          <Form>
              <label htmlFor = "username">username</label>
<<<<<<< HEAD
              <Field id="username" type="text" autocomplete="off" placeholder="username" name = "username"/>
               <H5>{touched.username && errors.username}</H5>
              <label htmlFor = "password">password</label>
              <Field id="password" type="password" autocomplete="off" placeholder="password" name= "password"/>
=======
              <Field id="username" type="text" autoComplete="off" placeholder="username" name = "username"/>
               <H5>{touched.username && errors.username}</H5>
              <label htmlFor = "password">password</label>
              <Field id="password" type="password" autoComplete="off" placeholder="password" name= "password"/>
>>>>>>> 0db049fcb0283ddd2678c5a547f55700678b8c37
              <H5>{touched.password && errors.password}</H5>
              <label htmlFor = "confirmPassword">Confirm your password</label>
              <Field id="passwordConfirmation" type="password" placeholder="passwordConfirmation" name="passwordConfirmation"/>
             <H5>{touched.passwordConfirmation && errors.passwordConfirmation}</H5>
             <label htmlFor = "rememberPassword">Let us remember your password?</label>
              <Field id="rememberPassword" type="checkbox" name="rememberPassword"/>
              <H5>{touched.rememberPassword && errors.rememberPassword}</H5>
              <button type="submit">SignUp</button>
           </Form> 
             
   
  );
};

        


    
export default withFormik({
    mapPropsToValues: () => {
        return{
            username: '',
            password: "",
            confirmPassword: "",
            rememberPassword: false
        }
        // if(rememberPassword===true){
        //     setToken(localStorage.getItem('token')
        // }
    },
    handleSubmit(values){
    
        Swal.fire({
            title: 'Now Please Login',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOamKMfdxmxQlQsH4_tGp_gfuik8vLENLJl_HxrlswCNvF2Rw',
            imageHeight: 100,
            imageAlt: 'userCity'
          })
        console.log(values)
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
          .min(3, "Must be 3 characters or more")
          .max(15, "Must be less than 15 characters")
          .required("This field is required"),
        password: Yup.string()
          .min(3, "Must be 3 characters or more")
          .max(18, "Must be less than 18 characters")
          .required("This field is required"),
          passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })
})(SignUp)