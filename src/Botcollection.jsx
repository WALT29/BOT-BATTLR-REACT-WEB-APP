import React, { useEffect, useState } from "react";
import Collection from './Collection';

function Botcollections({bots,botArmy,setBotArmy,setBots}){
    const [sortedBots, setSortedBots] = useState([...bots]);

    useEffect(()=>setSortedBots(bots),[bots])

    console.log("hello",bots);
    return(
        <>   
            <h2 className="bot-collection-title">BOT COLLECTION</h2>
             <div className="collections">
                {sortedBots.map((bot)=>(<Collection key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setBots={setBots} bots={bots} setSortedBots={setSortedBots} sortedBots={sortedBots}/>))}
            </div>
        </>
       
    )
}

export default  Botcollections;