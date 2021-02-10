import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LoginTemplate from './components/LoginTemplate';
import TodoApp from './components/TodoApp';

const App = () => {
  window.location.href = '/#/login/signup';
  return (
    <HashRouter>
      <Route path="/login" component={LoginTemplate} />
      <Route path="/todo" component={TodoApp} />
    </HashRouter>
  );
};

export default App;
