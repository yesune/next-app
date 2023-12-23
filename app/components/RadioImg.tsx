import React, {useState} from 'react'

const RadioImg = ({ choice, labelText, setChoice }:
  { choice: string, labelText: string, setChoice: (newChoice: string) => void }) => {

  return (
    <div className="form-control">
        <label className="label cursor-pointer radio-accent border m-1 justify-start p-3 rounded border-bordercolor ">
            <input type="radio" name="radio-10" className="radio checked:bg-buttoncolor"
              onChange={() => setChoice(labelText)}/>
            <div className = "flex flex-col items-center">
            <figure>
            {labelText == "Hasuki" && (
                <img
                src={`/images/Hasuki.gif`}
                alt={choice}
            />
            )}
            {labelText != "Hasuki" && (
            <img
                src={`/images/${labelText}.png`}
                alt={choice}
            />
            )}
            </figure>
            <span className="label-text m-3">{labelText}</span>
            </div>
        </label>
    </div>
  )
}

export default RadioImg;