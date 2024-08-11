import React,{useState} from "react";
import Details from "./details";

function Collection({bot,botArmy,setBotArmy,setBots,bots}){
    //console.log(bot);

    const[showDetails,setShowDetails]=useState(false)

    function handleClick(){
        setShowDetails(!showDetails)
    }

    function handleEnlist(){
    
        if (!botArmy.some((armyBot)=>armyBot.id === bot.id)){
            setBotArmy([...botArmy,bot])
            console.log(botArmy);
            setBots(bots.filter((soldier)=>(soldier.id !==bot.id)))
        }else{
            alert("BOT ALREADY IN THE ARMY")
        }


    }

    function handleDelete(){
        //console.log(bot.id);
        fetch(`http://localhost:3000/bots/${bot.id}`,{
            method:"DELETE"     
        })
        .then((response)=>{
            if(response.ok){
                setBots(bots.filter((soldier)=>soldier.id !==bot.id))
            }
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    return(
        <div className="collection">

            <div className="avatar">
                <img src={bot.avatar_url} alt=""/>
            </div>
            <h3>{bot.name}</h3>
            <button className="button-details" onClick={handleClick}>
                {showDetails?"HIDE DETAILS":"DETAILS"}
            </button>
            {showDetails && (
                <>
                <Details bot={bot} handleEnlist={handleEnlist} handleDelete={handleDelete}/>
                </>
                
            )}
        </div>
    )
}

export default Collection;