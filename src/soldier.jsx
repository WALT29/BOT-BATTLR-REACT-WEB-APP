import React, {useState} from "react";

export default function Soldier ({soldier,setBotArmy,botArmy,setBots,setSortedBots}) {
    console.log("soldier",soldier);

    const[showDetails,setShowDetails]=useState(false);

    function handleClick(){
        setShowDetails(!showDetails)
    }

    function handleRelease(){
        console.log("released button clicked",soldier.id);
        const updatedArmy=botArmy.filter((bot)=>bot.id !==soldier.id)
        setBotArmy(updatedArmy);
        setBots((prevBots) =>{
            const originalIndexOfSoldier=prevBots.findIndex((bot)=>bot.id==soldier.id)
            const newBots=[...prevBots];
            newBots.splice(originalIndexOfSoldier,0,soldier)
            return newBots
        });
        setSortedBots((prevBots)=>{
            const originalIndexOfSoldier=prevBots.findIndex((bot)=>bot.id==soldier.id)
            const newBots=[...prevBots];
            newBots.splice(originalIndexOfSoldier,0,soldier)
            return newBots
        }) 
    }


    return(
        <> 
            <div className="collection">
                <div className="avatar">
                <img src={soldier.avatar_url} alt=""/>
                </div>
                <h3>{soldier.name}</h3>
                <button className="button-details" onClick={handleClick}>
                    {showDetails?"HIDE DETAILS":"DETAILS"}
                </button>
                {showDetails && (
                    <>
                        <div className="moreDetails">
                            <p> <i className="bi bi-heart"></i>  : <span className="values">{soldier.health}</span> </p>
                            <p>Damage : <span className="values">{soldier.damage}</span> </p>
                            <p>Armour : <span className="values">{soldier.armor}</span> </p>
                            <p>BOT CLASS :  <span className="values">{soldier.bot_class}</span> </p>
                        </div>                        
                        <button className="release-button" onClick={handleRelease}>RELEASE</button>

                    </>
                )}
            </div>
            
            
        </>
    )
}