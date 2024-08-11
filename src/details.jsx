export default function Details ({bot,handleEnlist,handleDelete}) {
    return(
        <>
                <div className="moreDetails">
                    <p> <i className="bi bi-heart"></i>  : <span className="values">{bot.health}</span> </p>
                    <p>Damage : <span className="values">{bot.damage}</span> </p>
                    <p>Armour : <span className="values">{bot.armor}</span> </p>
                    <p>BOT CLASS :  <span className="values">{bot.bot_class}</span> </p>
                </div>
                
                <div className="buttons-on-details">
                    <button className="enlist-button" onClick={handleEnlist}>ENLIST</button>
                    <button className="delete-button" onClick={handleDelete}>DELETE</button>
                </div>
        </>
    )
}
