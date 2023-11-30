'use client';
import React from 'react'
import Checkbox from './Checkbox';
import Radio from './Radio';

// we should also code it so that we can pass in an input, and have those be the options

// handle the datasaving in the onclick section, have each radio button return a value when they are clicked

const ModalObj = ({ labelText }: { labelText: string }) => {
  return (
    <div>
        {/* The button to open modal */}
    <label htmlFor="my_modal_7" className="btn btn-primary bg-buttoncolor border-none">MAKE PICK</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
    <div className="modal" role="dialog">
    <div className="modal-box  w-full h-full">
        <h3 className="text-lg font-bold">{ labelText }</h3>
        <Radio labelText='Option 1'/>
        <Radio labelText='Option 2'/>
        <Radio labelText='Option 3'/>
    </div>
    <label className="modal-backdrop" 
        htmlFor="my_modal_7" 
        onClick={() => console.log('Label Clicked!')}
        >Close</label>
    </div>
    </div>
  )
};

export default ModalObj;