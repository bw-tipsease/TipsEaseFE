import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import styled from "styled-components";
import posed from "react-pose";
import serveImg from "../../imgs/adult-beverage-black-coffee-733761.jpg";

const H5 = styled.h5`
  color: #b22222;
`;

const FormContainer = styled.div`
  position: relative;
  min-width: 50em;
  max-width: 50em;
  align-content: center
  margin: -29em auto;
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  min-height: 65em;
  justify-content: space-evenly;
  background-color: #202020;
  box-shadow: 0px 12px 22px -1px #545309;
  border-radius: 10px;
  font-family: "Ubuntu", sans-serif;
`;

const Butt = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 0.8,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1,
    boxShadow: "0px 1px 10px #B1B7B7 "
  },
  press: {
    scale: 1,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});

const Label = styled.label`
  color: #f3e367;
  font-size: 2.5em;
`;

function SignUp({ errors, touched }) {
  return (
    <>
      <img className="formPageImg" style={{ zIndex: -999 }} src={serveImg} />
      <Form className="form">
        <FormContainer>
          <Label htmlFor="username">Username</Label>
          <Field
            id="username"
            type="text"
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
          <Label htmlFor="confirmPassword">Confirm your password</Label>
          <Field
            id="passwordConfirmation"
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirmation"
          />
          <H5>{touched.passwordConfirmation && errors.passwordConfirmation}</H5>
          <Label htmlFor="rememberPassword">
            Remember password?
            <Field
              id="rememberPassword"
              type="checkbox"
              name="rememberPassword"
            />
          </Label>
          <H5>{touched.rememberPassword && errors.rememberPassword}</H5>
          <Butt className="formButt" type="submit">
            Sign Up
          </Butt>
        </FormContainer>
      </Form>
    </>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      rememberPassword: false
    };
    // if(rememberPassword===true){
    //     setToken(localStorage.getItem('token')
    // }
  },
  handleSubmit(values) {
    Swal.fire({
      title: "Now Please Login",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOamKMfdxmxQlQsH4_tGp_gfuik8vLENLJl_HxrlswCNvF2Rw",
      imageHeight: 100,
      imageAlt: "userCity"
    });
    console.log(values);
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
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
  })
})(SignUp);