import React from 'react';
import TextInput from './TextInput';
import Button from './Button';

const LoginPanel = () => {
  return (
    <div>
      <TextInput />
      <div className="dib-ns mt2 tr">
        <Button title="Go" />
        <Button title="Reset" />
      </div>
    </div>
  );
};
export default LoginPanel;
