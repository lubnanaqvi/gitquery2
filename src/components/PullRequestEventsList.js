import React from 'react';
import { connect } from 'react-redux';
import PullRequestEventListItem from './PullRequestEventListItem';
const mapStateToProps = state => ({ ...state });
const PullRequestEventsList = ({ events }) => {
  const filtered = events.filter(x => x.type === 'PullRequestEvent');
  const result = filtered.map((x, i) => (
    <PullRequestEventListItem
      key={i}
      title={x.payload.pull_request.title}
      url={x.payload.pull_request.html_url}
      status={x.payload.pull_request.state}
      isMerged={x.payload.pull_request.merged ? 'merged' : ''}
    />
  ));
  const emptyList = <div />;
  const actualList = (
    <div>
      <h3>PullRequest Events</h3>
      <ul>{result}</ul>
    </div>
  );
  return events.length > 0 ? actualList : emptyList;
};

export default connect(mapStateToProps)(PullRequestEventsList);
