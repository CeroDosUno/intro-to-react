export default (state = [], action) => {

//always use switch statements to handle the action
  switch(action.type){

    case 'FETCH_POSTS':
        return action.payload;

    default:
      return state;
  }

};
