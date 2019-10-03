import React from 'react';
import { connect } from 'react-redux';
import { updateUsername } from '../actions';
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  updateUsername: uname => dispatch(updateUsername(uname))
});

const TextInput = ({ updateUsername, username }) => {
  return (
    <input
      type="text"
      id="uname"
      onChange={e => updateUsername(e.target.value)}
      placeholder="Enter your username on git"
      className="mh1 w-60-ns w-100 br2 pa1"
      value={username}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);
