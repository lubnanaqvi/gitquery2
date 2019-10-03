import React from 'react';
import { connect } from 'react-redux';
import { startUp, resetState } from '../actions';

const mapDispatchToProps = dispatch => ({
  startUp: username => dispatch(startUp(username)),
  resetState: () => dispatch(resetState())
});
const mapStateToProps = state => ({ ...state });
const Button = ({ title, startUp, resetState, username }) => {
  return (
    <button
      onClick={e => (title === 'Go' ? startUp(username) : resetState())}
      className="mh1 br2"
    >
      {title}
    </button>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
