import React from "react";
import { withFormik, Form, Field ,formikBag} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import styled from "styled-components";
import axios from 'axios';


const H5 = styled.h5`
  color: #b22222;
`;

const FormContainer = styled.div`
  min-width: 50em;
  max-width: 50em;
  margin-top:70px;
  margin: auto;
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  min-height: 65em;
  justify-content: space-evenly;
  background-color: #4e5055;
  box-shadow: 0px 12px 22px -1px #545309;
  border-radius: 10px;
  font-family: "Ubuntu", sans-serif;
`;
const BTN =styled.button`
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
`

const Label = styled.label`
  color: #f3e367;
  font-size: 2.5em;
`;

function SignUp({ errors, touched }) {
  return (
    <Form className="form">
      <FormContainer>
      <Label htmlFor="email">Username</Label>
        <Field
          id="email"
          type="email"
          autoComplete="off"
          placeholder="Your Email"
          name="email"
        />
        <H5>{touched.email && errors.email}</H5>
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
        <BTN className="formButt" type="submit">
          Sign Up
        </BTN>
      </FormContainer>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: () => {
    return {
      email: "",
      username: "",
      password: "",
      
    };
   
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
  }),
  handleSubmit(formikBag,values) {
    //
    console.log(values,'hey im a value you can be too')
    axios
    .post(`https://usemytechstuff.herokuapp.com/api/auth/register/`, values)
    .then((response) => {
      localStorage.setItem('token', response.data.payload);
      console.log('does token data exist:', response.data.payload)
      console.log(response, "hey its response here")
      formikBag.props.history.push('/');
      formikBag.props.setToken(response.data.payload)
    })
    .catch((e) => {
      // console.log(e.response.data && response.data);
    });
    Swal.fire({
      
      title: "Now Please Login",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOamKMfdxmxQlQsH4_tGp_gfuik8vLENLJl_HxrlswCNvF2Rw",
      imageHeight: 100,
      imageAlt: "userCity"
    });
    console.log(values);
  },

})(SignUp);
