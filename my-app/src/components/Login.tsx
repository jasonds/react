import * as React from 'react';

export interface LoginProps {
  // todo test
  submit?: () => void;
}

const Login = ({ submit }: LoginProps)  => {
  return (
    <div>
      <button onClick={submit}>login</button>
    </div>
  );
}

export default Login;
