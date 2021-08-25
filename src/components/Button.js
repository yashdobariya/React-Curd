import React from 'react'

export default function Button() {
    return (
        <div>
            <div className="btn-wrap">
                <button type="submit" value="Submit" className="">
                    Submit
                </button>
                <button
                    type="button"
                    value="Reset"
                    className="">
                    Reset
                </button>
			</div>
        </div>
    )
}
