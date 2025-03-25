import { useMemo } from 'react';
import { useTodos } from './todo-context';
import TodoItem from './ToDo-Item';
import './ToDo-Item.css';

const ToDoList = () => {
  const { tasks, filter } = useTodos();
  const filteredTasks = useMemo(() => {
    if (filter === 'NOT_COMPLETED') {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === 'COMPLETED') {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  return (
    <div className="todo-list">
      {filteredTasks.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default ToDoList;
