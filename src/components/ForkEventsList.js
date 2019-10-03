import React from 'react';
import { connect } from 'react-redux';
import ForkEventListItem from './ForkEventListItem';

const mapStateToProps = state => ({ ...state });
const ForkEventsList = ({ forksList }) => {
  const result = forksList.map((x, i) => (
    <ForkEventListItem key={i} url={x.parent.html_url} title={x.name} />
  ));
  const emptyList = <div />;
  const actualList = (
    <div>
      <h3>Fork Events</h3>
      <ul>{result}</ul>
    </div>
  );
  return forksList.length > 0 ? actualList : emptyList;
};
export default connect(mapStateToProps)(ForkEventsList);
