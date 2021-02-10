import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="SignUp">
      <h1>
        Sign Up
        <br />
        for TODO APP
      </h1>
      <form>
        <input type="text" className="userId" name="id" placeholder="ID" />
        <input
          type="password"
          className="userPw"
          name="password"
          placeholder="PASSWORD"
        />
        <input type="submit" className="signUpButton" value="회원가입" />
      </form>
      <div className="cancel">
        <Link to="/login">취소</Link>
      </div>
    </div>
  );
};

export default SignUp;
