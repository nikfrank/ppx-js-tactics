import React, { Component } from 'react';

export default class ReduceSum extends Component {
  state = { numbers: [ 13, 22, 99, -23, 37, 4.5 ] }
  
  render(){
    return (
      <div>
        <p>numbers: {this.state.numbers.join(', ')}</p>
        <span> sum: { 0 } </span>
      </div>
    );
  }
};
