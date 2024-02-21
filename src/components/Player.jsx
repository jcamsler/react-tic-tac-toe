import { useState } from "react";

export default function Player ({initialName, symbol, isActive}){
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);  


  let editablePlayerName = <span className="player-name">{playerName}</span>
  //let btnCaption  = 'Edit'

  function handleChange(event){
    setPlayerName(event.target.value);
  }


  if (isEditing){
    editablePlayerName = <input type="text" required defaultValue={playerName} onChange={handleChange}/>
   // btnCaption="Save"
  }
  
  function handleEditClick(){
    setIsEditing((editing) => !editing);
  }

  function saveName(){
    setIsEditing(false);
    document.getElementById("updatedName").value();
    setupdatedName();    
  }

    return ( <li className={isActive? 'active':undefined}>
        <span className="player">
        {editablePlayerName}       
        <span className="player-symbol">{symbol}</span>
        </span>

        <button onClick={handleEditClick}>{isEditing ? "Save": "Edit"}</button>

      </li>);
}