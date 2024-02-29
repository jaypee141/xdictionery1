import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

let dict=
[

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

];


function App() {
const [word, setWord] = useState("");

  // console.log(dict[1]);
  const [refer, setRefer] = useState(""); 

  const getData = (word) => {
    let foundMeaning = "";
    dict.forEach((item) => {
      if (item.word === word) {
        foundMeaning = item.meaning;
      }
    });

    setRefer(foundMeaning);
  };

const handleWord=(e)=>{
  setWord(e.target.value);
}
const handleClick = ()=>{
  getData(word);
}

  return (
    <div className="App">
        <h1>Dictionery App</h1>
        <input type="text" placeholder="Search a word..." onChange={handleWord}/>
        <button onClick={handleClick}>Search</button>
        <h4>Definition:</h4><br/>
        {word &&
        <p>{refer || "Word not found in the dictionary."}</p>
        }

    </div>
  );
}

export default App;
