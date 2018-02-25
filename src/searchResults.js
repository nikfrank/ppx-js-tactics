export default [
  {
    h1: 'use array.reduce to sum some numbers',
    blurb: [
      'input from user',
      '[1, 2, 3]',
      '--> SUM',
      '6',
    ],
    topics: [
      'mdn array reduce',
      'react controlled text input',
      'mdn string split',
    ],
    component: 'ReduceSumInput',
  },
  
  {
    h1: 'use array.reduce to sum some numbers',
    blurb: [
      'array in state',
      '[1, 2, 3]',
      '--> SUM',
      '6',
    ],
    topics: [
      'mdn array reduce',
      'react component state',
    ],
    component: 'ReduceSum',
  },

  {
    h1: 'limit the length of the displayed text',
    blurb: [
      'only have space for 16 chars',
      'should render',
      'only have spa...',
    ],
    topics: [
      'mdn string slice',
      'jsx render from state',
    ],
    component: 'Ellipsis',
  },

  {
    h1: 'chunk an input list to a desired size',
    blurb: [
      'I have a list like [1, 2, 3, 4, 5]',
      'that into groups of three',
      'like [[1, 2, 3], [4, 5]]',
      'or maybe groups of two',
      'like [[1, 2], [3, 4], [5]]',
    ],
    topics: [
      'mdn array slice',
      'html input number',
      'react setstate',
      'pure function',
    ],
    component: 'ChunkInput',
  },

  {
    h1:'Make up a condition and filter your list',
    blurb: [
      'we have users.json like',
      '[{ name: \'fry\', isGreat: false, species: \'human\' }',
      ' { name: \'bender\', isGreat: true, species: \'robot\' }]',
      'we may want to filter by species (find all humans)',
      'or by greatness (you must be this great to enter)',
    ],
    topics: [
      'https://reactjs.org/docs/forms.html',
      'react setstate',
      'mdn array filter',
    ],
    component: 'LiveFilter',
  },

  {
    h1: 'Drop items from the end of your list',
    blurb: [
      'we want to take away some items from our list',
      'but we want to decide at runtime (the user) how many',
    ],
    topics: [
      'https://reactjs.org/docs/forms.html',
      'react setstate',
      'react lists',
    ],
    component: 'Drop',
  },

  {
    h1: 'Make a list of receipts, send them to the API',
    blurb: [
      'we want to track our expenses so we can get tax writeoffs',
      'we\'ll need to add {} formatted objects to a list',
      'then send that list as a POST body',
    ],
    topics: [
      'react forms',
      'react setState',
      'mdn fetch',
    ],
    component: 'SubmitReceipts',
  },
];

const template = [
  {
    h1: '',
    blurb: [
    ],
    topics: [
    ],
    component: '',
  },
];
