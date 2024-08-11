import React from "react";
import Collection from './Collection';

function Botcollections({bots,botArmy,setBotArmy,setBots}){
    console.log("hello",bots);
    return(
        <>   
            <h2 className="bot-collection-title">BOT COLLECTION</h2>
             <div className="collections">
                {bots.map((bot)=>(<Collection key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setBots={setBots} bots={bots}/>))}
            </div>
        </>
       
    )
}

export default  Botcollections;