import React, { Component } from 'react';

const inputStyle = { width: '80%', margin: '5px auto' };

export default class ChunkInput extends Component {
  state = {
    inputList: [ 0, 1, 2, 13, 45, 792.315 ],
    chunkSize: 3,
    output: [[0, 1, 2], [13, 45, 792.315]],
  }
  
  render(){
    return (
      <div>
        <div>
          These inputs should be controlled by this.state
          <input style={inputStyle}
                 placeholder='type a comma (,) separated list of numbers'/>

          <input type='number' style={inputStyle} />
        </div>
        <span> chunked array: { this.state.output.join(' ') } </span>
      </div>
    );
  }
};
