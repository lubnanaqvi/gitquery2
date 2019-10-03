import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

const initialState = {
  username: '',
  loggedIn: false,
  events: [],
  repos: [],
  forksList: []
};
const rootReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return { ...store, username: action.payload };
    case 'LOGIN_USER':
      if (store.username.length !== 0) return { ...store, loggedIn: true };
      else return store;
    case 'UPDATE_STORE_WITH_APIRESPONSE':
      return { ...store, [action.apiName]: action.payload };
    case 'RESET_STATE':
      return initialState;
    case 'UPDATE_FORKSLIST':
      return { ...store, forksList: [...store.forksList, action.payload] };
    default:
      return store;
  }
};

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
