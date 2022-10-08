import React from "react";

function CharacterItem({ item }) {
  const showDetails = () =>{
    let charName=item.name;
    charName=charName.replace(/\s+/g, '_');

    window.open(`https://breakingbad.fandom.com/wiki/${charName}`)
        
  }
  return (
    
    <div className="card" onClick={showDetails}>
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CharacterItem;
