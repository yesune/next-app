import React, {useState} from 'react'

const RadioVideo = ({ choice, labelText, setChoice, name}:
  { choice: string, labelText: string, setChoice: (newChoice: string) => void, name: string}) => {

  return (
    <div className="form-control">
        <label className="label cursor-pointer radio-accent border m-1 justify-start p-3 rounded border-bordercolor ">
            <input type="radio" name="radio-10" className="radio checked:bg-buttoncolor"
              onChange={() => setChoice(labelText)}/>
            <a href={labelText} target="_blank" rel="noopener noreferrer">{name}</a>
        </label>
    </div>
  )
}

export default RadioVideo;