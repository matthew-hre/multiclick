import './App.css';
import React, { Component } from 'react';
import ClickerModule from './ClickerModule'
import AutoClickerModule from './AutoClickerModule'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerCount: 0,
      auto: {
        unlocked: false,
        count: 0,
        price: 50,
        delay: 1000,
      }
    }
  }

  createComputer() {
    this.setState({computerCount: this.state.computerCount+1});
  }

  createAutoClicker() {
    const costGrowth = 1.65;

    let auto = this.state.auto;

    if(auto.price <= this.state.computerCount) {
      auto.price = Math.ceil(auto.price*costGrowth);
      auto.count = auto.count+1;
      this.setState({computerCount: this.state.computerCount-auto.price});
      this.setState({auto: auto});
    }
  }

  checkUnlocks() {
    let auto = this.state.auto;
    if(this.state.computerCount >= 25 && !auto.unlocked) {
      auto.unlocked = true
      this.setState({auto: auto});
    }
  }

  canMakeAutoClickers() {
    this.checkUnlocks();

    const auto = this.state.auto;

    if(auto.unlocked) {
      return (<AutoClickerModule
              onClick={() => this.createAutoClicker()}
              price={auto.price}
              count={auto.count}
              computerCount={this.state.computerCount}/>);
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
