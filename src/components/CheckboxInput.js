
import React, { Component } from 'react'

export default class CheckboxInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sunroof: false,
			navigationSystem: false,
			remoteStart: false,
			abs: false,
			appleAndroid: false,

		}
	}

	handleInputChange = (e) => {
		const target = e.target;
		console.log(target);
		const value = target.type === "checkbox" ? target.checked : target.value;
		console.log(value);
		const name = target.name;
		console.log(name);

		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<div>
				<div className="form-item">
					<label className="">Car Features List</label>
					<label className="ml mt">
						<input
							name="sunroof"
							type="checkbox"
							id=""
							onChange={(e) => this.handleInputChange(e)}
							checked={this.state.sunroof}
						/>
						Sunroof
					</label>

					<label className="ml">
						<input
							name="navigationSystem"
							type="checkbox"
							id=""
							onChange={(e) => this.handleInputChange(e)}
							checked={this.state.navigationSystem}
						/>
						Navigation System
					</label>

					<label className="ml">
						<input
							name="remoteStart"
							type="checkbox"
							id=""
							onChange={(e) => this.handleInputChange(e)}
							checked={this.state.remoteStart}
						/>
						Remote Start
					</label>

					<label className="ml">
						<input
							name="abs"
							type="checkbox"
							id=""
							onChange={(e) => this.handleInputChange(e)}
							checked={this.state.abs}
						/>
						ABS
					</label>

					<label className="ml">
						<input
							name="appleAndroid"
							type="checkbox"
							id=""
							onChange={(e) => this.handleInputChange(e)}
							checked={this.state.appleAndroid}
						/>
						Apple Carplay and Android Auto
					</label>
				</div>
			</div>
		)
	}
}
