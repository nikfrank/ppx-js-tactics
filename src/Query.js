import React, { Component } from 'react';
import './Query.css';

import searchResults from './searchResults';

const mockAutos = ['nik', 'nox', 'alex'];

class Query extends Component {
  state = {
    query: '',
    autos: [],
    shouldShowAutocomplete: '',
  }
  
  setQueryFromInput = ({ target: { value } })=> {
    this.setState({ query: value, });
    
    value ?
    this.setState({ autos: mockAutos.filter(a => a.includes(value)) }) :
    this.setState({ autos: [] });
  }
  
  makeQuery = query => {
    this.setState({ query, autos: [] });
    this.props.onResults(
      searchResults.filter( item => JSON.stringify(item).includes(query) )
    );

  }

  onKeyPress = e => (
    e.key === 'Enter' ?
    this.makeQuery(this.state.query)
    : null
  )

  componentDidMount(){
    this.props.onResults( searchResults );
  }
  
  render() {
    const { autos } = this.state;

    
    return (
      <div className={this.props.className}>
	<div className='query-container'>
	  <input value={this.state.query}
                 onKeyPress={this.onKeyPress}
                 autoFocus
                 placeholder='Search Google or type URL'
                 onChange={this.setQueryFromInput}/>

          {
          !autos.length ? null : (
          <ul className='autocomplete'>
            {
            autos.map((auto, i)=> (
            <li key={i} onClick={()=> this.makeQuery(auto)}>
              {auto}
            </li>
            ) )
            }
          </ul>
          )
          }
	</div>
        
	<button onClick={()=> this.makeQuery(this.state.query)}
                disabled={!this.state.query.length}>
	  Search
        </button>
	<button
	  onClick={()=> this.makeQuery(this.state.query)}
	  disabled={!this.state.query.length}>I'm feeling lucky</button>

      </div>
    );
  }
};

export default Query;
