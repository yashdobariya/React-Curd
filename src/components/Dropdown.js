import React from 'react'

export default function Dropdown() {
    return (
        <div className="form-item">
			<label for="">Choose a car type:</label>
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
