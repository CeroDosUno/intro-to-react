console.clear()

//actioncreaters

const createPolicy = (name, amount) =>{
  return {
    type: 'CREATE_POLICY',
    payload: {
      name, amount
    }
  };
};

const createClaim=(name,amount)=>{
  return {
    type:'CREATE_CLAIM',
    payload:{
      name,
      amount
    }
  };
};

const deletePolicy = (name) =>{
  return {
    type:'DELETE_POLICY',
    payload: {
      name
    }
  };
};

//REDUCERS
//ClaimsHistory
const claimsHistory = (oldListOfClaims = [], action) =>{
  //new claim received
  if(action.type === 'CREATE_CLAIM'){
    return [...oldListOfClaims, action.payload];
  }
  //return list of claims if no new claim is made
  return oldListOfClaims;
};

//Accounting
const accounting = (bagOfMoney = 0, action) =>{
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney- action.payload.amount;
  } else if(action.type==='CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

//Policies
const policies= (listOfPolicies=[], action) =>{
  if(action.type==='CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  }
  else if(action.type ==='DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name
  );
  }

  return listOfPolicies;

};

const {createStore,combineReducers} = Redux;

//merging all reducers
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies:policies
});


//creating the store
const store = createStore(ourDepartments);

store.dispatch(createPolicy('Diana',300));
store.dispatch(createPolicy('Bob',300));
store.dispatch(createPolicy('Linda',300));

store.dispatch(createClaim('Linda',200));
store.dispatch(createClaim('Bob',20));

store.dispatch(deletePolicy('Bob'));
console.log(store.getState());
