import React, { useState, useEffect }  from 'react';
import './App.css';
import axios from 'axios';
const Base_url = `https://swapi.dev/api/people`;

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




  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
