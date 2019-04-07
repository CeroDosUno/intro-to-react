import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


export const fetchPostsAndUsers = () => async (dispatch,getState) =>{
  //memoization action creator
  //call fetch post, returns action,
  //dispatch that action
  //wait to get response with await
  // console.log('about to fetch');

  await dispatch(fetchPosts());

  // console.log(getState().posts);

  //go through each post and pull userId
  // const userIds = _.uniq(_.map(getState().posts,'userId'));
  // 
  //
  // userIds.forEach( id => dispatch(fetchUser(id)));

  //chain on functions that manipulate data
  //.value is used to finally run all of them
  _.chain(getState().posts)
    .map('userId')
      .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();

};


//DOTHIS
//all this does is defining a function that returns a function
export const fetchPosts = () =>   async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

      dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

export const fetchUser = (id) => async (dispatch) =>{
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
};
