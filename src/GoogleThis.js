import React from 'react';

export default ({ searches=[] })=>(
  <div>
    Google { searches.length > 1 ? 'These' : 'This'}:
    <ul>
      {
        searches.map( search=> (
          <li key={search}>
            <a href={'https://www.google.com/search?q='+
                     search.split(' ').join('+')+
                     '&pws=0&gl=us&gws_rd=cr'}
               target='_blank'>{search}
            </a>
          </li>
        ) )
      }
    </ul>
  </div>
);
