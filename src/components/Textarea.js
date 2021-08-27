import React, { Component } from 'react'

export default class Textarea extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "Enter car overview here..." }
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value })
	}
	render() {
		return (
			<div>
				<div className="form-item ">
					<label>Car Overview</label>
					<textarea
						value={this.state.value}
						onChange={(e) => this.handleChange(e)}
						rows="5"
						cols="30"
						maxLength="50"
					></textarea>
				</div>
			</div>
		)
	}
}
