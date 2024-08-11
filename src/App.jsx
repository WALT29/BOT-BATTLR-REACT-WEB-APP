import React,{ useEffect, useState } from 'react'
import Botcollections from './Botcollection'
import BotArmy from './BotArmy';

function App() {
  const [bots,setBots]=useState([]);
  const [botArmy,setBotArmy]=useState([]);

  console.log(botArmy);

  useEffect(()=>{
    fetch("http://localhost:3000/bots")
    .then(response=>response.json())
    .then((data)=>{
      setBots(data)
    })
  },[])
  
  return (
    <>
    <header>
      <h1>BOT BATTLR</h1>
    </header>
    <BotArmy botArmy={botArmy} setBotArmy={setBotArmy} setBots={setBots}/>
    <Botcollections bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} setBots={setBots}/>

    </>
  )
}

export default App
