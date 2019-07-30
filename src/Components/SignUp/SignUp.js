import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
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
  justify-content: space-evenly;
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

function SignUp({ errors, touched }) {
  return (
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
          Remember password?{" "}
          <Field
            id="rememberPassword"
            type="checkbox"
            name="rememberPassword"
          />
        </Label>

        <H5>{touched.rememberPassword && errors.rememberPassword}</H5>
        <Butt type="submit">SignUp</Butt>
      </FormContainer>
    </Form>
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
