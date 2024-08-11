import React,{ useEffect, useState } from 'react'
import Botcollections from './Botcollection'
import BotArmy from './BotArmy';
import SortComponent from './SortComponent';

function App() {
  const [bots,setBots]=useState([]);
  const [sortedBots,setSortedBots]=useState([]);
  const [botArmy,setBotArmy]=useState([]);


  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/WALT29/db.json/bots")
    .then(response=>response.json())
    .then((data)=>{
      setBots(data)
      setSortedBots(data)
    })
  },[])
  

  return (
    <>
    <header>
      <h1>BOT BATTLR</h1>
    </header>
    <SortComponent bots={bots} sortedBots={sortedBots} setSortedBots={setSortedBots}/>
    <BotArmy botArmy={botArmy} setBotArmy={setBotArmy} setBots={setBots} setSortedBots={setSortedBots}/>
    <Botcollections bots={sortedBots} botArmy={botArmy} setBotArmy={setBotArmy} setBots={setBots}/>

    </>
  )
}

export default App
