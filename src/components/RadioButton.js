import React, { Component } from 'react'

export default class RadioButton extends Component {
	render() {
		return (
			<div className="">
			<div className="form-item--radio">
					<label className="">Type Of Car Fule</label>
					<label className="ml--radio">
						<input
							type="radio"
							className=""
							name=""
							id=""
							value=""
						/>
						Petrol
					</label>

					<label className="ml--radio">
						<input
							type="radio"
							className=""
							name=""
							id=""
							value=""
						/>
						Diesel
					</label>
					<label className="ml--radio">
						<input
							type="radio"
							className=""
							name=""
							id=""
							value=""
						/>
						Electric
					</label>
				</div>
	</div>
		)
	}
}
