import React from 'react'
import Formik from "formik";
import yup from "yup";
import axios from 'axios';
import Swal from 'sweetalert2';
import Create from './Create'


function CreateForm() {
//     const [cfState,setcfState] = useState({
//         newworker:{
//             name:"",
//             age:"",
//             time:"",
//             bio: "",
//         }}
// );
// const [initState, setInitState]= useState(
//     {
//         workers: [],
//         fetchingWorkers: false,
//         addingWorker: false,
//         error:'',
//       }
// )
//gets the workers
// export const getworker = (gimme) => dispatch =>{
//     dispatch({type: FETCHING_WORKER})
  
//     axios.get(
//         `http://localhost:3333/workers`, gimme
//     )
//     .then(res =>{
//          console.log(res
//             )
//     //  localStorage.setItem('token', res.data.payload)
//         dispatch({
//             type:FETCHING_SUCCESS,
//             payload: res.data, 
            
//         })
//     })
//     .catch(err =>{
//         dispatch({
//             type:FETCHING_FAILURE,
//             payload: err
  
//         })
//     })
    
    
   
//   }
//adding a worker to your database
    // export const addWorker = (worker) => dispatch =>{
    //     axios.post(
    //         `http://localhost:3333/workers`, worker,
        
    //     )
    //         .then(res =>{
    //             dispatch({ 
    //                 type:ADD_WORKER,
    //                 payload: res.data 
                
    //             })
    //         })
    //         .catch(err =>
    //           dispatch({
    //             type:ADD_WORKER_FAILURE,
    //             payload:err
    //           })
    //           )
            
      
        
    //   }

    //   handlechange = (e) => {
    //     e.preventDefault();
    //     setcfState({
    //         newworker:{
    //         ...cfState.newworker,
    //         [e.target.name] : e.target.value
    //         }
    //     })
    //  }

    //  handleSubmit = (e) =>{
    //     e.preventDefault();
    // //    this.props.addWorker(cfState.newworker)
    // addWorker(cfState.newworker)
    // }
    return (
        <div>
            <Create/>
    {/* <form onSubmit = {handleSubmit}>
      <input onChange = {handlechange}
      type ="name"
      placeholder ="name"
      name = "name"
      value = {cfState.name}
      />
      <input onChange = {handlechange}
      type ="age"
      placeholder ="age"
      name = "age"
      value = {cfState.age}
      />
      <input onChange = {handlechange}
      type ="time"
      placeholder = "time in the industry"
      name="time"
      value = {cfState.time}/>
      <input onChange = {handlechange}
      type ="height"
      placeholder ="height..."
      name = "height"
      value = {cfState.bio}
      />
      <button value="submit">Add Worker </button>
    </form> */}
        </div>
    )
}

export default CreateForm
