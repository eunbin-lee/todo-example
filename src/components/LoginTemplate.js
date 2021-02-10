import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import './LoginTemplate.scss';

const LoginTemplate = () => {
  return (
    <div className="LoginTemplate">
      <Route path="/login" exact={true} component={Login} />
      <Route path="/login/signup" exact={true} component={SignUp} />
    </div>
  );
};

export default LoginTemplate;
