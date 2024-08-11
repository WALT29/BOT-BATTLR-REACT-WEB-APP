import React, {useState} from "react";

export default function Soldier ({soldier,setBotArmy,botArmy,setBots}) {
    console.log("soldier",soldier);

    const[showDetails,setShowDetails]=useState(false);

    function handleClick(){
        setShowDetails(!showDetails)
    }

    function handleRelease(){
        console.log("released button clicked",soldier.id);
        const updatedArmy=botArmy.filter((bot)=>bot.id !==soldier.id)
        setBotArmy(updatedArmy);
        setBots((prevBots) => [...prevBots, soldier]);    
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