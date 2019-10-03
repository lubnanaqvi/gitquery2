export const updateUsername = username => ({
  type: 'UPDATE_USERNAME',
  payload: username
});
const API_URL = 'https://api.github.com/users/';
export const resetState = () => ({ type: 'RESET_STATE' });
export const startUp = username => dispatch => {
  if (username.length > 0) {
    dispatch(loginUser());
    dispatch(fetchForks(username));
    dispatch(fetchPRs(username));
  }
};
export const fetchForks = username => dispatch => {
  dispatch(fetchAPI('repos', username));
};
export const fetchPRs = username => dispatch => {
  dispatch(fetchAPI('events', username));
};
export const loginUser = () => {
  return {
    type: 'LOGIN_USER'
  };
};
export const fetchAPI = (endpoint, username) => dispatch => {
  fetch(API_URL + username + '/' + endpoint)
    .then(res => res.json())
    .then(data => {
      dispatch(updateStoreWithApiResponse(data, endpoint));
      if (endpoint === 'repos') dispatch(makeForksList(data));
    });
};
export const updateStoreWithApiResponse = (payload, endpoint) => {
  return {
    type: 'UPDATE_STORE_WITH_APIRESPONSE',
    apiName: endpoint,
    payload
  };
};

export const makeForksList = repos => dispatch => {
  repos
    .filter(x => x.fork)
    .map(x => x.url)
    .map(url =>
      fetch(url)
        .then(res => res.json())
        .then(data => dispatch(updateforksList(data)))
    );
};
export const updateforksList = payload => {
  return {
    type: 'UPDATE_FORKSLIST',
    payload
  };
};
