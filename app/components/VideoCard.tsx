'use client';
import React, {useState} from 'react';
import ModalObj from './ModalObj';
import VideoModal from './VideoModal';
//https://upload.wikimedia.org/wikipedia/en/5/5f/LOL_Worlds_logo.svg

//<h2 className="card-title">Shoes!</h2>

// NOTE! THE IMAGE SHOULDN'T BE SHOWN UNTIL YOU MAKE A SELECTION

const VideoCard = ({labelText, choicesArray, nameArray, setChoice, choice}:
    {labelText:string, choicesArray:string[], nameArray:string[],
        setChoice: (newChoice: string) => void, choice:string}) => {
return (
<div className="card w-72 shadow-xl bg-dark-champ bg-no-repeat bg-center border border-bordercolor">
<figure style={{ opacity: choice === "Not Selected" ? 0 : 1 }}>
        <img src="https://championsqueue.gg/logo-worlds.webp" alt="Shoes" />
      </figure> 
    <p className="text-center font-bold">{choice}</p>
  <div className="card-body">
    <p className="text-center">{labelText}</p>
    <div className="card-actions justify-center">
    <VideoModal choice={choice} setChoice={setChoice} 
                labelText={labelText} choicesArray={choicesArray} nameArray={nameArray}/>
    </div>
  </div>
</div>
)};

export default VideoCard;