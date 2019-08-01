import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import axios from 'axios';
import styled from "styled-components";

const H2 = styled.h2`
  color: #b22222;
`;

const FormContainer = styled.div`
position: relative;
min-width: 50em;
max-width: 50em;
align-content: center;
margin: 5em auto;
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

const Butt = styled.button`
  width: 9em;
  margin: 0 auto;
  background-color: #f3e367;
  border: 2px solid black;
`;

const Input = styled.input`
  color: #f3e367;
`;

const Label = styled.label`
  color: #f3e367;
  font-size: 2.5em;
`;

const CreateForm = props => {
  const [selectedFile, setSelectedFile] = useState();
  //const [workerData, setWorkerData] = useState({ name: "", workDuration: "", image: {} });

  const fileSelectedHandler = event => {
    const newValues = { ...props.values };
    newValues["image"] = event.target.files[0];
    props.setValues(newValues);
    //setSelectedFile(event.target.files[0]);
  };

  /*const fileUploadHandler = event => {
    event.preventDefault();
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
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
  };*/

  return (
    <Form>
      <FormContainer>
        <Label>Select an Image</Label>
        <input
          id="image"
          type="file"
          name="image"
          onChange={fileSelectedHandler}
        />
        {/*<Butt onClick={fileUploadHandler}>Upload Image</Butt>*/}
        <Label htmlFor="first_name">First name:</Label>
        <Field
          id="first_name"
          type="text"
          autoComplete="off"
          placeholder="first name"
          name="first_name"
        />
        <Label htmlFor="last_name">Last name:</Label>
        <Field
          id="last_name"
          type="text"
          autoComplete="off"
          placeholder="last name"
          name="last_name"
        />
        <Label htmlFor="email">Email:</Label>
        <Field
          id="email"
          type="email"
          autoComplete="off"
          placeholder="example@gmail.com"
          name="email"
        />
        <Label htmlFor="tagline">Your Tagline:</Label>
        <Field
          id="tagline"
          type="text"
          autoComplete="off"
          placeholder="Your tagline..."
          name="tagline"
        />
        {/*<Label htmlFor="workType">What is your position?</Label>
        <Field id="workType" component="select" name="workType">
          <option value="Bartender" selected>
            Bartender
          </option>
          <option value="Server">Server</option>
          <option value="Waiter">Waiter</option>
          <option value="Valet">Valet</option>
          <option value="Bellhop">Bellhop</option>
        </Field>*/}
        {/*<H5>{props.touched.name && props.errors.workDuration}</H5>*/}
        <Label htmlFor="start_date">When did you start?</Label>
        <Field
          id="start_date"
          type="number"
          autoComplete="off"
          placeholder="date"
          name="start_date"
        />
        <Butt type="submit">Create Profile</Butt>
        <H2>{props.touched.name && props.errors.workDuration}</H2>
      </FormContainer>
    </Form>
  );
};


const formikCreateForm = withFormik({
  mapPropsToValues: ({
    workerList,
    setWorkerList,
    first_name,
    last_name,
    email,
    image,
    tagline,
    start_date
  }) => {
    return {
      workerList: workerList || [],
      setWorkerList: setWorkerList || (() => {}),
      first_name: first_name || "",
      last_name: last_name || "",
      email: email || "",
      image: image || {},
      tagline: tagline || "",
      start_date: start_date || 0
    };
  },
  handleSubmit(values, { resetForm }) {
    function create_UUID() {
      var dt = new Date().getTime();
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      return uuid;
    }
    console.log("Hi there i did the thing");
    const uniqueId = create_UUID();
    let fileToUrl = '';
    if(values.image.name){
      fileToUrl = URL.createObjectURL(values.image);
    }

    /*
    {
      id: uniqueId,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      photo_url: fileToUrl,
      tagline: values.tagline,
      start_date: values.start_date
    }
    */
    axios.put(`https://tipsease-backend-new.herokuapp.com/api/tippees/${uniqueId}`, {
      id: uniqueId,
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      photo_url: fileToUrl,
      tagline: values.tagline,
      start_date: values.start_date,
      password: 'hello'
    })
    .then(res => {
      console.log('Put Res:',res);
      resetForm();
    })
    .catch( err => {
      console.log("Put Error:", err);
    })  
    
    // values.setWorkerList([
    //   ...values.workerList,
    //   {
    //     name: values.name,
    //     workType: values.workType,
    //     workDuration: values.workDuration,
    //     image: values.image,
    //     id: create_UUID()
    //   }
    // ]);
  },
  validationSchema: Yup.object().shape({
     first_name: Yup.string()
       .min(3, "Must be 3 characters or more")
       .max(15, "Must be less than 15 characters")
       .required("This field is required"),
     last_name: Yup.string()
       .min(3, "Must be 3 characters or more")
       .max(15, "Must be less than 15 characters")
       .required("This field is required"),
     email: Yup.string()
       .email("Must be a valid email")
       .required("This field is required"),
     tagline: Yup.string()
       .min(3, "Must be 3 characters or more")
       .max(25, "Must be less than 25 characters")
       .required("This field is required"),
     start_Date: Yup.number()
    //   .min(1, "Must be 3 characters or more")
    //   .max(18, "Must be less than 18 characters")
  })
})(CreateForm);

export default formikCreateForm;