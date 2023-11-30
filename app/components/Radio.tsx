import React from 'react'

const Radio = ({labelText} : {labelText:string}) => {
  return (
    <div className="form-control">
        <label className="label cursor-pointer radio-accent border m-1 justify-start p-3 rounded border-bordercolor ">
            <input type="radio" name="radio-10" className="radio checked:bg-buttoncolor" checked />
            <span className="label-text m-3">{labelText}</span> 
        </label>
    </div>
  )
}

export default Radio