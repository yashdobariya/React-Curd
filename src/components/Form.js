import TextInput from './TextInput'
import Dropdown from './Dropdown';
import RadioButton from './RadioButton';
import CheckboxInput from './CheckboxInput';
import Textarea from './Textarea';
import Button from './Button';
import React from 'react'

export default function Form() {

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(e, "call");
	}

	return (
		<div className="form-wrap">
			<form className="form" onSubmit={(e) => { handleSubmit(e) }}>
				<div className="input-wrap">
					<TextInput fieldname="Company Name:" />
					<TextInput fieldname="Model Name:" />
				</div>
				<Dropdown />
				<RadioButton />
				<CheckboxInput />
				<Textarea />
				<Button />
			</form>
		</div>
	)
}
