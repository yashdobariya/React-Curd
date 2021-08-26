import React, { Component } from 'react'

export default class TextInput extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="form-item wh">
                <label htmlFor="">{this.props.fieldname}</label>
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
}
