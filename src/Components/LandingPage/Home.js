import React,{useEffect,useState,useContext} from 'react';
import {TokenContext} from '../Context/Contexts';
import axios from "axios";
import styled from "styled-components"
import AxiosWithAuth from "./AxiosWithAuth"
import CreateWorkerButton from './CreateWorker/CreateWorkerButton';
import CreateWorker from './CreateWorker/CreateWorker';
import WorkersGrid from './Workers/WorkersGrid';
import WorkersDropdown from './Workers/WorkersDropdown';
import WorkerButtons from './Workers/WorkerButtons';
import TipForm from '../LandingPage/Workers/TipForm'
const Sap = styled.div`
font-family: sans-serif;
text-align: center;
height: 100%;
background: #e8e8e8;
/* background-image: url("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80(228 kB)
https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80
"); */
/* background-size: cover;
background-position: center center;
background-repeat: none; */
`
const Home = () => {
 // const [starwarsChars, setChars] = useState()
 const { token,setToken } = useContext(TokenContext);
 localStorage.getItem("token")
   const [data, setData] = useState({});
localStorage.getItem('token')
   useEffect(() => {
     setToken(localStorage.getItem('token'))
     console.log('test')
   }, [token,setToken]);
   const [secretData, setSecretData] = useState([]);
   function setRestricted(res) {
     setSecretData(res);
   }
   useEffect(() => {
     AxiosWithAuth()
       .get("https://tipsease-backend-new.herokuapp.com/restricted/data")
       .then(res => {
         console.log(res);
         setRestricted(res.data);
       })
       .catch(err => console.log(err));
   }, []);
   const fetchData = () => {
     axios.get(`https://tipsease-backend-new.herokuapp.com/api/restricted/data`)
     .then(res => {
       console.log(res.data);
       setData(res.data);
     })
     .catch(err => {
       console.log(err);
     })
   }
 console.log("token","does context get this")
   useEffect(fetchData, [localStorage.getItem('token')]);
 console.log(data,"data")

   const [modal, setModal] = useState(false);

   const toggleModal = () => {
    setModal(!modal);
  }

 return(
   <div>
<Sap className="App">
{/* <WorkerType/> */}
{/* Create worker is where you will be able to create a new worker.  */}
<WorkerButtons />
<WorkersGrid modal={modal} toggleModal={toggleModal}/>
{/* <WorkerCard/> */}
{modal ? <TipForm /> : null}
      </Sap>
   </div>
 )
}
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       starwarsChars: []
//     };
//   }
//   componentDidMount() {
//     this.getCharacters("https://build-week-tess.herokuapp.com/planets/");
//   }
//'https://swapi.co/api/people'
//   getCharacters = URL => {
//     fetch(URL)
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         this.setState({ starwarsChars: data.results });
//       })
//       // .catch(err => {
//       //   throw new Error(err);
//       // });
//   };
//   render() {
//     return (
//       <div className="App">
//         <h1 className="Header">React Wars</h1>
//         <ChararcterList starwarsChars={this.state.starwarsChars} />
//       </div>
//     );
//   }
// }
export default Home;