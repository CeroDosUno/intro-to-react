import jsonPlaceholder from '../apis/jsonPlaceholder';
//DOTHIS
//all this does is defining a function that returns a function
export const fetchPosts = () =>
   async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

      dispatch({
        type: 'FETCH_POSTS',
        payload: response
    })
};



/*
//CANNOTDOTHIS
//middleware is needed to make the API call
export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get('/posts');

  return {
      type: 'FETCH_POSTS',
      payload: response
  };
};

*/
