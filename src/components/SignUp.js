import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const onSubmit = (e) => {
    const user = 'user';
    const userList = [];
    const account = {
      id: e.target.id.value,
      pw: e.target.pw.value,
    };
    const userStorage = JSON.parse(localStorage.getItem(user));

    if (userStorage !== null) {
      userList.push(...userStorage);
    }

    if (userList.find((user) => user.id === e.target.id.value)) {
      e.preventDefault();
      alert('이미 존재하는 아이디입니다.');
      e.target.id.value = '';
      e.target.pw.value = '';
    } else {
      userList.push(account);
      localStorage.setItem(user, JSON.stringify(userList));
      alert('회원가입이 완료되었습니다');
      window.location.href = '/#/login';
    }
  };

  return (
    <div className="SignUp">
      <h1>
        Sign Up
        <br />
        for TODO APP
      </h1>
      <form onSubmit={onSubmit}>
        <input type="text" className="userId" name="id" placeholder="ID" />
        <input
          type="password"
          className="userPw"
          name="pw"
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
