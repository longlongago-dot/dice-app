import React, { Component } from "react";

class Die extends Component {
    render() {
        let cls = this.props.face
        return (
            <i className={`Die fas fa-dice-${cls} ${this.props.rolling && "shaking"}`}></i >
        )
    }
}

export default Die;