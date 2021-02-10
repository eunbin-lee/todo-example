import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className="Login">
      <h1>TODO APP</h1>
      <form>
        <input type="text" className="userId" name="id" placeholder="ID" />
        <input
          type="password"
          className="userPw"
          name="password"
          placeholder="PASSWORD"
        />
        <input type="submit" className="loginButton" value="로그인" />
      </form>
      <div className="signUp">
        <Link to="/login/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
