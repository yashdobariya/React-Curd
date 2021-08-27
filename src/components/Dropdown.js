import React, { Component } from 'react'

export default class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = { value: 'sedan' }
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	}


	render() {
		return (
			<div className="form-item">
				<label htmlFor="">Choose a car type:</label>
				<select value={this.state.value} onChange={(e) => this.handleChange(e)}>
					<option value="hatchback">Hatchback</option>
					<option value="sedan">Sedan</option>
					<option value="mpv">MPV</option>
					<option value="suv">SUV</option>
					<option value="convertible">Convertible</option>
					<option value="sport-car">Sport Car</option>
					<option value="electric">Electric</option>
				</select>
			</div>
		)
	}
}
