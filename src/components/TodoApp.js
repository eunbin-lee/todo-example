import React, { useRef, useState, useCallback } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 5; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
      clicked: false,
      updating: false,
    });
  }
  return array;
}

const TodoApp = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(6);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
      clicked: false,
      updating: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId 1 씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  const colorChange = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, clicked: !todo.clicked } : todo,
      ),
    );
  }, []);

  const onUpdate = useCallback((id) => {
    todos[id - 1].updating = !todos[id - 1].updating;
  });

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        colorChange={colorChange}
        onUpdate={onUpdate}
      />
    </TodoTemplate>
  );
};

export default TodoApp;
