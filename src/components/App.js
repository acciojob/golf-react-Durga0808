import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: 0,
        };
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    buttonClickHandler() {
        this.setState({ renderBall: true });
        document.addEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown(event) {
        if (event.key === "ArrowRight") {
            this.setState((prevState) => ({
                ballPosition: prevState.ballPosition + 5,
            }));
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.state.renderBall ? (
                    <div className="ball" style={{ left: `${this.state.ballPosition}px` }}></div>
                ) : (
                    <button onClick={this.buttonClickHandler}>Start</button>
                )}
            </div>
        );
    }
}

export default App;
