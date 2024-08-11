import React from "react";
import Soldier from "./soldier";

function BotArmy({botArmy,setBotArmy,setBots}){
    //console.log("y",botArmy);
    return(
        <>
            <h1 className="bot-army-title">MY BOT ARMY</h1>
            <div className="collections">
                {
                    botArmy.map((soldier)=>(
                        <Soldier key={soldier.id} soldier={soldier} setBotArmy={setBotArmy} botArmy={botArmy} setBots={setBots}/>
                    ))
                }
            </div>
        </>
        

    )
}
export default BotArmy;