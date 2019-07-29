import React, { Component } from 'react'
import Axios from 'axios';

export default class UploadImg extends Component {
    state = {
        selectedFile:null
    }
    fileSelectedHandler = event => {
       this.setState({
           selectedFile: event.target.files[0]
       })
    }
    fileUploadHandler = () =>{
        const fd = new FormData();
        fd.append('image',this.state.selectedFile, this.state.selectedFile.name)
   axios.post('',fd, {onUploadProgress: progressEvent =>{
       <h1>{Math.round(progressEvent.loaded / progressEvent.total* 100)+ "%"}</h1>

   }})
   .then(res =>{
       console.log(res,"this is the results of our post")
   }
    )
    }
    render() {
        return (
            <div>
               <input type="file" onChange={this.fileSelectedHandler}/> 
               <button onClick={this.fileUploadHandler}>Upload a Image</button>
            </div>
        )
    }
}
