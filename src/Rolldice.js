import React, { Component } from "react";
import Die from "./Die";

class Rolldice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props) {
        super(props);
        this.state = { die1: "one", die2: "two", rolling: false };
        this.roll = this.roll.bind(this);
    }
    roll() {
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        this.setState({ die1: newDie1, die2: newDie2, rolling: true })

        setTimeout(() => {
            this.setState({ rolling: false })
        }, 1000)
    }


    render() {
        return (
            <div className="Rolldice">
                <Die face={this.state.die1} rolling={this.state.rolling}></Die>
                <Die face={this.state.die2} rolling={this.state.rolling}></Die>
                <div className="Rolldice-btn">
                    <button onClick={this.roll} disabled={this.state.rolling}>
                        {this.state.rolling ? "Rolling...." : "Role Dice"}
                    </button>
                </div>
            </div>
        )
    }
}

export default Rolldice;