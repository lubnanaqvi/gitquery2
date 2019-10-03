import React from 'react';
const ForkEventListItem = ({ url, title }) => (
  <li className="pa2">
    <a href={url} className="mh2 no-underline underline-hover b black">
      {title}
    </a>
  </li>
);
export default ForkEventListItem;
