import "./App.css";
import React, { useState } from "react";

const dict = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [data, setdata] = useState("");
  const [refer, setRefer] = useState("");

  // console.log(dict[0]);
  const findInput =(e)=>{
    setdata(e,target.value);
  }
  // let newData=()=>{

  // }
  let data1=[];

  const getData = () => {
    const words = data.toLowerCase();
    const findWord = dict.find(
      (entry) => entry.word.toLowerCase() === words
    );
    if (findWord) {
      setRefer(findWord.meaning);
      setdata("");
    } else {
      setRefer("Word not found in the dict.");
    }
  };
  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        value={data}
        type="text"
        placeholder="Search for a word..."
        onChange={findInput}
      />
      <button onClick={getData}>Search</button>
      <p>Definition:</p>
      <p>{refer}</p>
    </div>
  );
}

export default App;