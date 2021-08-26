import React, { Component } from 'react'

export default class TextInput extends Component {
    constructor(props){
        super(props);
        this.state = {value:""}

    }

    handleChange = (event) =>{
        this.setState({value: event.target.value});
                console.log("call");

    }
    
    render() {
                
        return (
            <div className="form-item wh">
                <label htmlFor="">{this.props.fieldname}</label>
                <input
                type="text"
                value= {this.state.value}
                onChange={(event) => this.handleChange(event)}     
                placeholder="Enter company name"
                />
            </div>
        )
    }
}
