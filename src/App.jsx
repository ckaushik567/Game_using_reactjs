import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [yourSelect,setYourSelect] = useState();
  const [pcSelect,setPcSelect] = useState();
  const [yourScore,setYourScore] = useState(0);
  const [pcScore , setPcScore] = useState(0);

  const array = ["Rock","Papper","Scissors"];

  function chekItem(e){
    let item = Math.floor(Math.random()*3);
     if(e.target.textContent=="Scissors" && array[item]=='Papper'){
      setYourScore(prev=>prev+1);
      setYourSelect(e.target.textContent);
      setPcSelect(array[item])
     }
     else if(e.target.textContent=='Rock' && array[item]=='Scissors'){
      setYourScore(prev=>prev+1);
      setYourSelect(e.target.textContent);
      setPcSelect(array[item])
     }
     else if(e.target.textContent=='Papper' && array[item]=='Rock'){
      setYourScore(prev=>prev+1);
      setYourSelect(e.target.textContent);
      setPcSelect(array[item])
     }
     else if(e.target.textContent == array[item]){
      setYourSelect(e.target.textContent);
      setPcSelect(array[item])
     }
     else{
      setPcScore(prev=>prev+1);
      setPcSelect(array[item]);
      setYourSelect(e.target.textContent)
     }
}


  return (
     <div className="container">
      <h1>WELCOME TO ROCK, PAPPER, SCISSORS GAME</h1>
      <div className="main-section">
        <h3 onClick={(e)=>chekItem(e)}>Rock</h3>
        <h3 onClick={(e)=>chekItem(e)}>Papper</h3>
        <h3 onClick={(e)=>chekItem(e)}>Scissors</h3>
      </div>
      <h4>Your Choice : {yourSelect}</h4>
      <h4>PC Choice : {pcSelect}</h4>
      <h2>Your Score : {yourScore}</h2>
      <h2>PC Score : {pcScore}</h2>
     </div>
  )
}

export default App
