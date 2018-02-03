import React, { Component } from 'react';
import './App.css';

import Query from './Query';
import Results from './Results';

const imgSrc = 'https://www.google.co.il/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

class App extends Component {
  state = { results: [] }
  
  onResults = results=> this.setState({ results })
  
  reset = ()=> this.setState({ results: [] })
  
  render() {
    const { results } = this.state;
    
    return (
      <div className="App">
        <img className={results.length ?
                        'GoogleImgWithResults' : 'GoogleImg'}
             src={imgSrc}
             alt='what is this tomfoolery?'/>
        <Query onResults={this.onResults}
               className={results.length ?
                          'QueryWithResults' : 'Query'}/>
        
        {
	  results.length ? (
            <Results onReset={this.reset} results={results}/>
          ) : null
        }
        
      </div>
    );
  }
}

export default App;
