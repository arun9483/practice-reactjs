import { FC } from 'react';
import { Todo } from './todo-types';
import './ToDo-Item.css';
import { useTodos } from './todo-context';

interface TodoItemProp {
  todo: Todo;
}

const TodoItem: FC<TodoItemProp> = ({ todo,  }) => {
  const {toggleHandler, removeHandler} = useTodos();
  return (
    <div className="todo-item">
      <label>
        <input
          type="checkbox"
          name="todo-toggle"
          onChange={() => {
            toggleHandler(todo.id);
          }}
          checked={todo.completed}
        />
      </label>
      <span>{todo.text}</span>
      <button onClick={() => removeHandler(todo.id)}>❌</button>
    </div>
  );
};

export default TodoItem;
