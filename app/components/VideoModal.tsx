'use client';
import React from 'react'
import Checkbox from './Checkbox';
import Radio from './Radio';
import RadioVideo from './RadioVideo';

// we should also code it so that we can pass in an input, and have those be the options

// handle the datasaving in the onclick section, have each radio button return a value when they are clicked

const VideoModal = ({ choice, labelText, setChoice, choicesArray, nameArray }:
  { choice: string,
    labelText: string,
   setChoice: (newChoice: string) => void,
    choicesArray:string[]
    nameArray:string[]}) => {
 return (
    <div>
        {/* The button to open modal */}
    <label htmlFor={labelText} className="btn btn-primary bg-buttoncolor border-none">MAKE PICK</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id={labelText} className="modal-toggle" />
    <div className="modal" role="dialog">
    <div className="modal-box  w-full h-full">
        <h3 className="text-lg font-bold">{ labelText }</h3>
        <RadioVideo choice={choice} labelText={choicesArray[0]} setChoice={setChoice} name={nameArray[0]}/>
        <RadioVideo choice={choice} labelText={choicesArray[1]} setChoice={setChoice} name={nameArray[1]}/>
        <RadioVideo choice={choice} labelText={choicesArray[2]} setChoice={setChoice} name={nameArray[2]}/>
        <RadioVideo choice={choice} labelText={choicesArray[3]} setChoice={setChoice} name={nameArray[3]}/>
        <RadioVideo choice={choice} labelText={choicesArray[4]} setChoice={setChoice} name={nameArray[4]}/>
        <RadioVideo choice={choice} labelText={choicesArray[5]} setChoice={setChoice} name={nameArray[5]}/>
    </div>
    <label className="modal-backdrop" 
        htmlFor={labelText}
        onClick={() => console.log('Label Clicked!')}
        >Close</label>
    </div>
    </div>
  )
};

export default VideoModal;