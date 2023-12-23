import React from 'react';
import ModalImg from './ModalImg';
//https://upload.wikimedia.org/wikipedia/en/5/5f/LOL_Worlds_logo.svg

//<h2 className="card-title">Shoes!</h2>

// NOTE! THE IMAGE SHOULDN'T BE SHOWN UNTIL YOU MAKE A SELECTION

const PlayerCard = ({labelText, choicesArray, setChoice, choice}:
    {labelText:string, choicesArray:string[], setChoice: (newChoice: string) => void, choice:string}) => {


return (
<div className="card w-72 shadow-xl bg-dark-champ bg-no-repeat bg-center border border-bordercolor">
    <figure style={{ opacity: choice === "Not Selected" ? 0 : 1 }}>
    {choice === "Not Selected" && (
        <img src="https://championsqueue.gg/logo-worlds.webp" alt="League Icon" />
    )}
    {choice == "Hasuki" && (
        <img
        src={`/images/Hasuki.gif`}
        alt={choice}
    />
    )}
    {choice != "Not Selected" && choice != "Hasuki" && (
    <img
        src={`/images/${choice}.png`}
        alt={choice}
    />
    )}
    </figure>
    <p className="text-center font-bold">{choice}</p>
  <div className="card-body">
    <p className="text-center">{labelText}</p>
    <div className="card-actions justify-center">
      <ModalImg choice={choice} setChoice={setChoice} 
                labelText={labelText} choicesArray={choicesArray}/>
    </div>
  </div>
</div>
)};

export default PlayerCard;