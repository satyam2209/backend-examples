import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  // fetching api using axios
  useEffect(()=>{
    // axios.get('http://localhost:4000/jokes')
    /* not mention as full url because it is not compulsory 
    that user always use this port and this url so this is not recommended */
    // if making project using CRA (create react app) then use proxy in package.json
    // and always proxy value is same as backend url so it not hsowing cors to understanding the frontend and backend at same url due to proxy
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  // it gives error cors policy
  // this error comes
  /* Access to XMLHttpRequest at 'http://localhost:4000/jokes' from origin
   'http://localhost:3000' has been blocked by CORS policy: No 
   'Access-Control-Allow-Origin' header is present on the requested resource.*/

  // cors provide safety
  // cors means cross origin
  // if frontend and backend are different url or different port then this is cross origin 

  // said backend developer to whitelist my url or my port or IP address or domain

  /* whitelisting is different on local and on production because its 
  depend whether is our app live on netlify or on vercel */
 
  // install cors npm package (npm i cors) to backend  (solution 1)  
  
  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES: {jokes.length}</p>
      
      
      {/* {jokes.map((joke, index) =>
      // if you write like this using currly braces then always use return without return it not showing any input so that use parentheses
       {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>;
      })} */}

       {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
