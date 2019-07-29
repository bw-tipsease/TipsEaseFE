import React,{useEffect,useState,useContext} from 'react';
import {TokenContext} from '../Context/Contexts';


import axios from "axios";

import styled from "styled-components"
import AxiosWithAuth from "./AxiosWithAuth"
//BTW Sap stands for starter app. Is a personal naming convention.Not industry Standard In ANY way.
const Sap = styled.div`
font-family: sans-serif;
text-align: center;
height: 750px;

background-image: url("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
background-size: cover;
background-position: center center;
background-repeat: none;
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
    }, [token]);
    const [secretData, setSecretData] = useState([]);
    function setRestricted(res) {
      setSecretData(res);
    }
    useEffect(() => {
      AxiosWithAuth()
        .get("http://localhost:4000/restricted/data")
        .then(res => {
          console.log(res);
          setRestricted(res.data);
        })
        .catch(err => console.log(err));
    }, []);
    const fetchData = () => {
      axios.get(`http://localhost:4000/api/restricted/data`)
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
//export const TokenContext = createContext();
  return(
    <div>
 <Sap className="App">
<h1>Private Route</h1>
        

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