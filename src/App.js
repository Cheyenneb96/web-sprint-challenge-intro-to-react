import React, { useState, useEffect }  from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import Character from './components/Character'
const Base_url = `https://swapi.dev/api/people`;


const Header = styled.h1`width: 40%;
margin-left: 29%;
border: 2px solid yellow;
text-decoration: underline;
color: yellow;
padding: 2%;
background: black;
letter-spacing: 3px;
text-transform: uppercase;
display: flex;
justify-content: center;
`



const App = () => {

const [data , setData] = useState(null)
const [isLoaded, setIsLoaded] = useState(false)

useEffect(()=>{
  axios.get(`${Base_url}`)
.then(response => {
  if (response) {
    setData(response.data)
    console.log('RESPONSE', response.data)
  }
}).catch(err =>{console.log(err);})
},[])

useEffect(() => {
  if (data) {
    setIsLoaded(true)
  }
}, [data])

console.log('IS DATA', data)



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header>Characters</Header>
      <Character data={data} isLoaded={isLoaded} />
    </div>
  );
}

export default App;
