import React, { Component } from 'react';

export default class ReduceSum extends Component {
  state = { result: 0 }
  
  render(){
    return (
      <div>
        <div>
          <input style={{ width: '80%', margin: '5px auto' }}
                 placeholder='type a comma (,) separated list of numbers'/>
        </div>
        <span> output: { this.state.result } </span>
      </div>
    );
  }
};
