import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

export default (state = {}, action) =>{
  switch(action.type):
    case CREATE_STREAM:
      return {...state, [action.payload.id] = action.payload};
    case FETCH_STREAM:
      return {...state, [action.payload.id] = action.payload};
    case DELETE_STREAM:
      return state.filter{stream => stream.userId === action.payload.id};
    case EDIT_STREAM:
      return {...state, [action.payload.id] = action.payload};
    default:
      return state;
};
