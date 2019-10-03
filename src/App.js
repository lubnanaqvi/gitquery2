import React from 'react';

import './App.css';
import Header from './components/Header';
import LoginPanel from './components/LoginPanel';
import Greeting from './components/Greeting';
import PullRequestEventsList from './components/PullRequestEventsList';
import ForkEventsList from './components/ForkEventsList';
const App = () => {
  return (
    <div className="w-70-ns center">
      <Header />
      <div className="w-90 center">
        <Greeting />
        <LoginPanel />
        <ForkEventsList />
        <PullRequestEventsList />
      </div>
    </div>
  );
};

export default App;
/*
todo now:
add fetchgit as a thunk dispatched inside loginUser
combinereducers?
*/
