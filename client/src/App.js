import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const [user,setUser] = useState({
  joke:{text:"wanna joke, huh?"}
});

  // useEffect(() => {
  //   callBackendAPI()
  //     .then(res => setUser(res))
  //     .catch(err => console.log(err));
  // }, []);

  const getJoke = async ()=>{
    fetch('/joke')
    .then(result=>result.json())
    .then(res => setUser(res))
    .catch(err => console.log(err));
  
  }
  
  // const callBackendAPI = async () => {
  //   const response = await fetch('/joke');
  //   const result = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(result.message)
  //   }
  //   return result;
  // };
console.log(user);
  return  (
    <div className="App">
      <header className="App-header">
        <img src={logo.svg} className="App-logo" alt="logo" />
        <p>
         {user.joke.text}
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={()=>getJoke()}>get random joke</button>
      </header>
    </div>
  );
}

export default App;
