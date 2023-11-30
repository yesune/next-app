import React, { useState } from 'react' 

// radio button

const Checkbox = ({ labelText }: { labelText: string }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
    <div className="form-control">
    <label className={`label cursor-pointer border m-1 justify-start p-3 rounded  ${isChecked ? 'border border-white' : ' border-bordercolor'}`}>
        <input type="checkbox"
            className={`checkbox checkbox-primary`}
            onClick={() => setIsChecked(!isChecked)
            }
        />
        <span className="label-text m-3 text-white">{labelText}</span> 
    </label>
    </div>
)};

export default Checkbox