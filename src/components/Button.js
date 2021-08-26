import React, { Component } from 'react'

export default class Button extends Component {
    render() {
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
}
