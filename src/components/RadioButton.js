import React, { Component } from 'react'

export default class RadioButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeOfFuel: ''
        }
    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === "radio" ? target.checked : target.value;
        console.log(value);
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="">
                <div className="form-item--radio">
                    <label className="">Type Of Car Fuel</label>
                    <label className="ml--radio">
                        <input
                            type="radio"
                            className=""
                            name="typeOfFuel"
                            id=""
                            value={this.state.value}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        Petrol
                    </label>
                    <label className="ml--radio">
                        <input
                            type="radio"
                            className=""
                            name="typeOfFuel"
                            id=""
                            value={this.state.value}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        Diesel
                    </label>
                    <label className="ml--radio">
                        <input
                            type="radio"
                            className=""
                            name="typeOfFuel"
                            id=""
                            value={this.state.value}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        Electric
                    </label>
                </div>
            </div>
        )
    }
}
