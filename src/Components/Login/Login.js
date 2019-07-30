import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import styled from "styled-components";

const H5 = styled.h5`
  color: #b22222;
`;

const FormContainer = styled.div`
  min-width: 50em;
  max-width: 50em;
  margin: auto;
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  height: 70em;
  justify-content: space-around;
  background-color: #4e5055;
  box-shadow: 0px 12px 22px -1px #545309;
  border-radius: 10px;
  font-family: "Ubuntu", sans-serif;
`;

const Butt = styled.button`
  width: 9em;
  margin: 0 auto;
  background-color: #f3e367;
  border: 2px solid black;
`;

const Label = styled.label`
  color: #f3e367;
  font-size: 2.5em;
`;

function Login({ touched, errors }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/customer" />;
  }

  return (
    <Form className="form">
      <FormContainer>
        <Label htmlFor="username">Username</Label>
        <Field
          id="username"
          type="username"
          autoComplete="off"
          placeholder="username"
          name="username"
        />
        <H5>{touched.username && errors.username}</H5>
        <Label htmlFor="password">Password</Label>
        <Field
          id="password"
          type="password"
          autoComplete="off"
          placeholder="password"
          name="password"
        />
        <H5>{touched.password && errors.password}</H5>
        {/* <Label htmlFor = "confirmPassword">Confirm your password</Label>
    <Field id="passwordConfirmation" type="password" placeholder="passwordConfirmation" name="passwordConfirmation"/>
   <H5>{touched.passwordConfirmation && errors.passwordConfirmation}</H5>
   <Label htmlFor = "rememberPassword">Let us remember your password?</Label>
    <Field id="rememberPassword" type="checkbox" name="rememberPassword"/>
    <H5>{touched.rememberPassword && errors.rememberPassword}</H5> */}
        <Butt type="submit">Login</Butt>
      </FormContainer>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
      // confirmPassword: "",
      // rememberPassword: false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(20, "Must be less than 20 characters")
      .required("This field is required"),
    password: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(100, "Must be less than 100 characters")
      .required("Enter a password to continue")
    // passwordConfirmation: Yup.string()
    // .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  }),
  handleSubmit(values, formikBag) {
    axios
      .post(`http://localhost:4000/api/register`, values)
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        console.log("does token data exist:", response.data.payload);
        formikBag.props.history.push("/customer");
        formikBag.props.setToken(response.data.payload);
      })
      .catch(e => {
        // console.log(e.response.data && response.data);
      });
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
      position: "center",
      type: "success",
      title: "Welcome Back!",
      showConfirmButton: false,
      timer: 2500
    });
    //   }}
  }
})(Login);
