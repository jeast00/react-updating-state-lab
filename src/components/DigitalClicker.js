// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        };
    }

    handleClick = () => {
        let count = this.state.timesClicked + 1
        this.setState({
            timesClicked: count
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
