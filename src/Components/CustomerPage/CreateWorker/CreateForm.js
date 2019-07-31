import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import Axios from "axios";
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

const Input = styled.input`
  color: #f3e367;
`;

const Label = styled.label`
  color: #f3e367;
  font-size: 2.5em;
`;

const CreateForm = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  //const [workerData, setWorkerData] = useState({ name: "", workDuration: "", image: {} });

  const fileSelectedHandler = event => {
    const newValues = {...props.values};
    newValues['image'] = event.target.files[0];
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
        <input id='image' type="file" name='image' onChange={fileSelectedHandler} />
        {/*<Butt onClick={fileUploadHandler}>Upload Image</Butt>*/}
        <Label htmlFor="name">Please enter your name</Label>
        <Field
          id="name"
          type="text"
          autoComplete="off"
          placeholder="name"
          name="name"
        />
        <Label htmlFor="workType">What is your position?</Label>
        <Field
          id="workType"
          component="select"
          name="workType"
        >
            <option value="Bartender" selected>Bartender</option>
            <option value="Server">Server</option>
            <option value="Waiter">Waiter</option>
            <option value="Valet">Valet</option>
            <option value="Bellhop">Bellhop</option>
        </Field>
        {/*<H5>{props.touched.name && props.errors.workDuration}</H5>*/}
        <Label htmlFor="workDuration">Time in current position?</Label>
        <Field
          id="workDuration"
          type="text"
          autoComplete="off"
          placeholder="ex: 1year 2 months"
          name="workDuration"
        />
        <Butt type="submit">Create Profile</Butt>
      </FormContainer>
    </Form>
  );
}

const formikCreateForm = withFormik({
  mapPropsToValues: ({ workerList, setWorkerList, name, workType ,workDuration, image}) => {
    return {
      workerList: workerList || [],
      setWorkerList: setWorkerList || (()=>{}),
      name: name || "",
      workType: workType || "",
      workDuration: workDuration || "",
      image: image || {},
    };
  },
  handleSubmit(values, {resetForm}) {
    values.setWorkerList([...values.workerList, {name: values.name, workType: values.workType,
    workDuration: values.workDuration, image: values.image}]);
    resetForm();
   },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(15, "Must be less than 15 characters")
      .required("This field is required"),
    workDuration: Yup.string()
      .min(3, "Must be 3 characters or more")
      .max(18, "Must be less than 18 characters")
      .required("This field is required"),
  })
})(CreateForm);

export default formikCreateForm;
