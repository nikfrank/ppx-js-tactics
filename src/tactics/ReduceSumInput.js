import React, { Component } from 'react';

export default class ReduceSum extends Component {
  state = {
    numbers: [ 0, 1, 2, 13, 45, 792.315 ],
    sum: 0,
  }
  
  render(){
    return (
      <div>
        <div>
          This input should be controlled by this.state somehow
          <input style={{ width: '80%', margin: '5px auto' }}
                 placeholder='type a comma (,) separated list of numbers'/>
        </div>
        <span> sum: { this.state.sum } </span>
      </div>
    );
  }
};
