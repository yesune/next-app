'use client';
import React from 'react'
import Checkbox from './Checkbox';
import Radio from './Radio';

// we should also code it so that we can pass in an input, and have those be the options

// handle the datasaving in the onclick section, have each radio button return a value when they are clicked

const ModalObj = ({ choice, labelText, setChoice, choicesArray }:
  { choice: string,
    labelText: string,
   setChoice: (newChoice: string) => void,
    choicesArray:string[]}) => {
 return (
    <div>
        {/* The button to open modal */}
    <label htmlFor={labelText} className="btn btn-primary bg-buttoncolor border-none">MAKE PICK</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id={labelText} className="modal-toggle" />
    <div className="modal" role="dialog">
    <div className="modal-box  w-full h-full">
        <h3 className="text-lg font-bold">{ labelText }</h3>
        <Radio choice={choice} labelText={choicesArray[0]} setChoice={setChoice}/>
        <Radio choice={choice} labelText={choicesArray[1]} setChoice={setChoice}/>
        <Radio choice={choice} labelText={choicesArray[2]} setChoice={setChoice}/>
        <Radio choice={choice} labelText={choicesArray[3]} setChoice={setChoice}/>
    </div>
    <label className="modal-backdrop" 
        htmlFor={labelText}
        onClick={() => console.log('Label Clicked!')}
        >Close</label>
    </div>
    </div>
  )
};

export default ModalObj;