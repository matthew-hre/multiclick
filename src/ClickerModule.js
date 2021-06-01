import React, { Component } from 'react';

class ClickerModule extends Component {
    render() {
        return (
            <div className="module">
                <button onClick={this.props.onClick}>make computer</button>
                <hr />
            </div>
        );
    }
}

export default ClickerModule;
