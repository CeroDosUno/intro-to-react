import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

//DOTHIS
//all this does is defining a function that returns a function
export const fetchPosts = () =>   async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

      dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

//
// export const fetchUser = (id) => async (dispatch) =>{
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   })
// };



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

// DONT DO this
// THIS RETURNS THE SAME FUNCTION YOU CALLED THE FIRST TIME
// TRY THE ABOVE OPTION
// export const fetchUser = function(id) {
//   return _.memoize(async function(dispatch){
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });
// };

//not this either!
// export const fetchUser = function(id) {
//   return _.memoize(async function(dispatch){
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });
// };

//calls private function _fetchuser which will
//returns a function that calls fetchuser with id and dispatch
//network performance is improved due to lower requests made
//DOWNSIDE NO REFETCHING USER AGAIN
export const fetchUser = id => dispatch => _fetchUser(id,dispatch);
//privatefunction
const _fetchUser = _.memoize(async (id,dispatch) =>{
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
});

//
