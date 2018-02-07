import React, { Component } from 'react';

export default class Drop extends Component {
  state = {
    numbers: [ 0, 1, 2, 13, 45, 792.315 ],
    dropLength: 0,
  }
  
  render(){
    return (
      <div>
        <input style={{ width: '80%', margin: '5px auto' }}
               placeholder='type a comma (,) separated list of numbers'/>
        <input value={this.state.dropLength} type='number'/>
        <span> result: { this.state.numbers } but with fewer of them </span>
      </div>
    );
  }
};
