
const initState = {
  projects: [
    {id: '0', title: 'help me find peach', content: 'blah blah blah'},
    {id: '1', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '2', title: 'egg hunt with yoshi', content: 'blah blah blah too'},
  ]
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;