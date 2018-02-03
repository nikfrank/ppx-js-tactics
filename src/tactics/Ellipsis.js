import React, { Component } from 'react';

export default class Ellipsis extends Component {
  state = { text: 'blah blah blah blah blah' }
  
  render(){
    return (
      <div>
        {this.state.text}
      </div>
    );
  }
};
