import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  // fetching api using axios
  useEffect(()=>{
    axios.get('http://localhost:4000/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  // it gives error cors policy
  // Access to XMLHttpRequest at 'http://localhost:4000/jokes' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

  // cors provide safety
  // cors means cross origin
  // if frontend and backend are different url or different port then this is cross origin 

  // said backend developer to whitelist my url or my port
 
  // install cors npm package to backend  (solution 1)
  

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>;
      })}
    </>
  );
}

export default App;
