import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="header">
            <h3>{this.props.header}</h3>
        </div>
        )
    }
}
