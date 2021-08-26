import React, { Component } from 'react'

export default class Textarea extends Component {
	render() {
		return (
		<div>
        	<div className="form-item ">
						<label>Car Overview</label>
						<textarea
							rows="5"
							cols="30"
							className=""
							maxLength="50"
							name=""
							id=""
							placeholder="Enter car overview here..."
						></textarea>
				</div>
        </div>
		)
	}
}
