import React from 'react'

export default function TextInput(props) {
    return (    
        <div className="form-item wh">
            <label for="">{props.fieldname}</label>
            <input
            type="text"
            className=""
            name=""
            id=""
            placeholder="Enter company name"
             />
        </div>
        
    )
}
