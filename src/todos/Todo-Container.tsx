import { useState } from 'react';
import { useTodos } from './todo-context';
import ToDoList from './Todo-List';
import './Todo-Container.css';

const TodosContainer = () => {
  const [task, setTask] = useState<string>('');
  const {addHandler, changeFilter} = useTodos()
  const clickHandler = () => {
    const newTask = task.trim();
    if(newTask) {
      console.log(`newTask: ${newTask}`);
      addHandler({
        text: newTask, 
        completed: false 
      })
      setTask('');
    }
  }
  return (
      <div className='todos-container'>
        <h1>Dynamic todos</h1>
        <div>
          <label>
            New Task: <input value={task} onChange={(e) => setTask(e.target.value)} />
          </label>
          <button onClick={clickHandler}>Add Task</button>
        </div>
        <ToDoList />
        <div className='filter-container'>
          <button onClick={() => changeFilter('ALL')}>All</button>
          <button onClick={() => changeFilter('COMPLETED')}>Completed</button>
          <button onClick={() => changeFilter('NOT_COMPLETED')}>Pending</button>
        </div>
      </div>
  );
};

export default TodosContainer;

