import React, { Component } from 'react';

class Counter extends Component {
  render(){
    const { count, onChange } = this.props;

    return (
      <div className='counter'>
        <span>{count}</span>
        <button onClick={()=> onChange(count+1)}>++</button>
        <button onClick={()=> onChange(0)}>reset</button>
      </div>
    );
  }
}

export default class TwoCounters extends Component {
  state = { count0: 0, count1: 0 }

  change = counterName=> value=> this.setState({ [counterName]: value })

  render(){
    const { count0, count1 } = this.state;
    
    return (
      <div>
        <Counter count={count0} onChange={this.change('count0')} />
        <Counter count={count1} onChange={this.change('count1')} />
      </div>
    );
  }
}
