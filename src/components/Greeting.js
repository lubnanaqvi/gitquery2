import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ ...state });
const Greeting = ({ username, loggedIn }) => {
  return <h3> Hello there {loggedIn ? username : ''}!</h3>;
};
export default connect(mapStateToProps)(Greeting);
