import React, { Component } from 'react';

const inputStyle = { width: '80%', margin: '5px auto' };

export default class SubmitReceipts extends Component {
  state = {
    receipts: [],
    newItem: '',
    newAmount: '',
  }

  submitReceipts = ()=>{
    // call the api with state.receipts here
    // use https://jsonplaceholder.typicode.com/ if you wanna send data somewhere real
  }

  addReceipt = ()=>{
    // { item: newItem, amount: newAmount }
  }
  
  render(){
    return (
      <div>
        <div>
          <input style={inputStyle} placeholder='item purchased'/>
          <input type='number' style={inputStyle} />
          <button onClick={this.addReceipt}>+</button>
        </div>

        <ul>
          {
            this.state.receipts.map( ({ item, amount }, ri)=> (
              <li key={ri}>
                {item} - {amount}
              </li>
            ) )
          }
        </ul>

        <button onClick={this.submitReceipts}>Submit</button>
      </div>
    );
  }
};
