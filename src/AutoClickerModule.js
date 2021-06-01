import React, { Component } from 'react';

class AutoClickerModule extends Component {
    render() {

        let disabled = this.props.computerCount <= this.props.price;

        return (
            <div className="module">
                <p>printers: {this.props.count}</p>
                <button onClick={this.props.onClick} disabled={disabled}>make processor printer [{this.props.price} computers]</button>
                <hr />
            </div>
        );
    }
}

export default AutoClickerModule;
