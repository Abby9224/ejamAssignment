// Initial state:
const initState = {
  // posts: [
  //   {id: 1, post: "lorem ipsum - 1"},
  //   {id: 2, post: "lorem ipsum - 2"},
  //   {id: 3, post: "lorem ipsum - 3"}
  // ]
  deployment: [
    {templateName: 'Nike'},
    {version: 3.24},
    {url: 'https://nike.com'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;
