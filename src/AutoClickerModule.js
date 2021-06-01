import React, { Component } from 'react';

class AutoClickerModule extends Component {
    render() {
        return (
            <div className="module">
                <p>printers: {this.props.count}</p>
                <button onClick={this.props.onClick}>make processor printer [{this.props.price} computers]</button>
            </div>
        );
    }
}

export default AutoClickerModule;
