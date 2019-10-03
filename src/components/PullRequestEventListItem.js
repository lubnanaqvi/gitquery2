import React from 'react';

const PullRequestEventListItem = ({ title, url, status, isMerged }) => {
  let statusStyles = 'mh1 white br3 pv1 ph2';
  statusStyles += status === 'closed' ? ' bg-red' : ' bg-green';
  let isMergedStyles = 'mh1 white bg-purple br3 pv1 ph2';
  isMergedStyles += isMerged === 'merged' ? ' dib' : ' dn';
  return (
    <li className="pa2">
      <a href={url} className="mh2 no-underline underline-hover b black">
        {title}
      </a>
      <span className={statusStyles}>{status}</span>
      <span className={isMergedStyles}>{isMerged}</span>
    </li>
  );
};
export default PullRequestEventListItem;
