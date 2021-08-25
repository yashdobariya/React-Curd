import React from 'react'
import TextInput from './TextInput'
import RadioButton from './RadioButton';
import CheckboxInput from './CheckboxInput';
import Button from './Button';

export default function Form() {
    return (
		<div>
			<div className="">
				<form>

					
					<TextInput/>
					<div>
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
					<RadioButton/>
					<CheckboxInput/>					
					<div class="">
						<label>Car Overview</label>
						<textarea
							rows="4"
							cols="30"
							class=""
							maxlength="50"
							name=""
							id=""
							placeholder="Enter car overview here..."
						></textarea>
					</div>
					<Button/>					
				</form>
			</div>
		</div>
	);
}
