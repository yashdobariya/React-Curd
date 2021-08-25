import React from 'react'

export default function Textarea() {
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
