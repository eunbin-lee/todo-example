import React, { useState, useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdCreate,
  MdDone,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({
  todo,
  onRemove,
  onToggle,
  style,
  colorChange,
  onUpdate,
}) => {
  const { id, text, checked, clicked, updating } = todo;

  const [todoText, setTodoText] = useState(text);

  const textChange = useCallback(
    (e) => {
      setTodoText(e.target.value);
    },
    [todoText],
  );

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div
        className={cn('TodoListItem', { clicked })}
        onClick={() => colorChange(id)}
      >
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          {updating ? (
            <input value={todoText} onChange={textChange} />
          ) : (
            <div className="text">{text}</div>
          )}
        </div>
        <div className="update" onClick={() => onUpdate(id)}>
          {updating ? <MdDone /> : <MdCreate />}
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
