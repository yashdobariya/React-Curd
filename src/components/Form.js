import TextInput from './TextInput'
import Dropdown from './Dropdown';
import RadioButton from './RadioButton';
import CheckboxInput from './CheckboxInput';
import Textarea from './Textarea';
import Button from './Button';
import React, { Component } from 'react'

export default class Form extends Component {
	render() {
		return (
			<div className="form-section">
			{/* <div className="form-description">
				<h1>Welcome</h1>
			</div> */}
			<div className="form-wrap">
				<form className="form">
					<div className="input-wrap">
						<TextInput fieldname="Company Name:"/>
						<TextInput fieldname="Model Name:"/>
					</div>
					<Dropdown/>
					<RadioButton/>
					<CheckboxInput/>					
					<Textarea/>	
					<Button/>					
				</form>
			</div>
		</div>
		)
	}
}
