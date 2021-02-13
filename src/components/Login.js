import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const userStorage = JSON.parse(localStorage.getItem('user'));
    const triedId = e.target.id.value;
    const triedPw = e.target.pw.value;

    if (userStorage) {
      const idCheck = userStorage.filter((user) => user.id === triedId);

      if (idCheck.length > 0 && idCheck[0].pw === triedPw) {
        alert('로그인이 완료되었습니다.');
        window.location.href = '/#/todo';
      } else if (idCheck.length > 0 && idCheck[0].pw !== triedPw) {
        alert('비밀번호를 확인해 주세요.');
      } else {
        alert('존재하지 않는 계정입니다.');
      }
    }
  };
  return (
    <div className="Login">
      <h1>TODO APP</h1>
      <form onSubmit={onSubmit}>
        <input type="text" className="userId" name="id" placeholder="ID" />
        <input
          type="password"
          className="userPw"
          name="pw"
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
