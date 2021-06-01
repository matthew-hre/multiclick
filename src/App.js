import './App.css';
import React, { Component } from 'react';
import ClickerModule from './ClickerModule'
import AutoClickerModule from './AutoClickerModule'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerCount: 0,
      prices: {
        auto: 40,
      },
      upgrades: {
        auto: 0,
      }
    }
  }

  createComputer() {
    this.setState({computerCount: this.state.computerCount+1});
  }

  createAutoClicker() {
    const costGrowth = 1.75;
    if(this.state.prices.auto <= this.state.computerCount) {
      this.setState({computerCount: this.state.computerCount-this.state.prices.auto});
      this.setState({prices: {auto: this.state.prices.auto*costGrowth}})
      this.setState({upgrades: {auto: this.state.upgrades.auto+1}});
    }
  }

  canMakeAutoClickers() {
    if(this.state.computerCount >= 50) {
      return (<AutoClickerModule
              onClick={() => this.createAutoClicker()}
              price={this.state.prices.auto}
              count={this.state.upgrades.auto}/>);
    } else {
      return (<React.Fragment />);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>computers: {this.state.computerCount}</h1>

        <ClickerModule onClick={() => this.createComputer()}/>

        {this.canMakeAutoClickers()}

      </React.Fragment>
    );
  }
}

export default App;
