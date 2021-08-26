import React, { Component } from 'react'

export default class Dropdown extends Component {
	render() {
		return (
			<div className="form-item">
			<label htmlFor="">Choose a car type:</label>
			<select name="" id="">
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
