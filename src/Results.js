import React from 'react';
import './Results.css';

import tactics from './tactics/';
import GoogleThis from './GoogleThis';

export default ({ results, onReset })=>(  
  <div>
    <ul className='tactic-list'>
      {
        results.map( result=> {
          const Tactic = tactics[result.component];
          
          return (
	    <li key={result.component} className='tactic-container'>
	      <h3>{result.h1}</h3>
              
              <div className='tactic'>
                <div className='half'>
                  {
                    result.blurb.map((line, i) => (
                      <div key={i}><pre>{line}</pre></div>   
                    ) )
                  }
                  <GoogleThis searches={result.topics}/>
                </div>
                
                <div className='half'>
                  <Tactic/>
                </div>
              </div>
	    </li>
          );
        } )
      }
    </ul>
  </div>
);

