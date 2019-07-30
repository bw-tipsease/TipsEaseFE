import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Axios from "axios";
import styled from "styled-components";

const H5 = styled.h5`
  color: #b22222;
`;

const FormContainer = styled.div`
  width: 30%;
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
`;

const Butt = styled.button`
  width: 9em;
  margin: 0 auto;
`;

const Input = styled.input`
  color: #f3e367;
`;

const Label = styled.label`
  color: #f3e367;
  font-size: 2.5em;
`;
//Hey WEB21 students! This is called a class component. They are scary. You have to use the this keyword. Careful.
//I would stay away from this component if possible

class CreateForm extends Component {
  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);

    Axios.post("", fd, {
      onUploadProgress: progressEvent => {
        return (
          <h1>
            {Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"}
          </h1>
        );
      }
    }).then(res => {
      console.log(res, "this is the results of our post");
    });
  };
  render() {
    return (
      <Form>
        <FormContainer>
          <Label>Select an Image</Label>
          <Input type="file" onChange={this.fileSelectedHandler} />
          <Butt onClick={this.fileUploadHandler}>Upload Image</Butt>
          <Label htmlFor="name">Please enter your name</Label>
          <Field
            id="name"
            type="text"
            autoComplete="off"
            placeholder="name"
            name="name"
          />
          <H5>{this.props.touched.username && this.props.errors.username}</H5>
          <Label htmlFor="workDuration">
            How long have you worked at your current job?
          </Label>
          <Field
            id="workDuration"
            type="text"
            autoComplete="off"
            placeholder="ex: 1year 2 months"
            name="workDuration"
          />
          {this.props.touched.passwordConfirmation &&
            this.props.errors.passwordConfirmation}
          <Butt type="submit">Create Profile</Butt>
        </FormContainer>
      </Form>
    );
  }
}

const formikCreateForm = withFormik({
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
  handleSubmit(values) {},
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
})(CreateForm);

export default formikCreateForm;
