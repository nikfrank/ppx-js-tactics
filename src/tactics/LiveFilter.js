import React, { Component } from 'react';

const inputStyle = { width: '80%', margin: '5px auto' };

export default class LiveFilter extends Component {
  state = {
    users: [
      { name: 'fry', isGreat: false, species: 'human' },
      { name: 'hermes', isGreat: true, species: 'human' },
      { name: 'leela', isGreat: false, species: 'alien' },
      { name: 'bender', isGreat: true, species: 'robot' },
      { name: 'zoidberg', isGreat: false, species: 'crab' },
    ],
    currentFilterField: 'name',
    currentFilterOperator: 'contains', // equals, not equals
    currentFilterValue: '',
  }

  setFilterField = ({ target: { value, name } })=>{
    // we need to set the value into the state
    // if we can compute the filtered list, we should do it here to save time at render.
  }
  
  render(){
    return (
      <div>
        <div>
          Filter By
          <select style={inputStyle}
                  name='currentFilterField'
                  value={this.state.currentFilterField}
                  onChange={this.setFilterField}>
            <option value='name'>Name</option>
            <option value='isGreat'>Greatness</option>
            <option value='species'>Species</option>
          </select>

          this one should select the operator
          <select />

          this one will set the comparison value
          <input style={inputStyle} placeholder='value to compare'/>
        </div>

        we should then render out only a filtered list
        it's possible to filter the list in render if it's small and simple to do so
        <ul>
          {
            this.state.users.map( ({ name, great, species })=> (
              <li key={name}
                  style={{ border: `1px solid ${great? 'gold':'black'}` }}>
                {name} :: {species}
              </li>
            ) )
          }
        </ul>
      </div>
    );
  }
};
