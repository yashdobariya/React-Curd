import React from 'react'

const TextInput = (props) => {
    return (
        <div className="form-item wh">
            <label htmlFor="">{props.fieldName}</label>
            <input
                className="form-item--bigWidth"
                type="text"
                value={props.fieldValue}
                onChange={(e) => props.changeInputField(e.target.value)}
                placeholder="Enter company name"
            />
        </div>
    )
};

export default TextInput;
