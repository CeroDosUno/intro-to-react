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
