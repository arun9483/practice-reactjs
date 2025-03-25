import { createContext, useContext, useReducer, useState } from 'react';
import { nanoid } from 'nanoid';
import { AddTodoPayload, TodoList } from './todo-types';

const initialState: TodoList = [
  { id: nanoid(), text: 'Complete React assignment', completed: true },
  { id: nanoid(), text: 'Fix bug in dashboard', completed: false },
  { id: nanoid(), text: 'Read Redux documentation', completed: true },
];

type Action = { type: 'TOGGLE_TODO'; id: string } | { type: 'REMOVE_TODO'; id: string } | { type: 'ADD_TODO'; payload: AddTodoPayload };
type Filter = 'ALL' | 'COMPLETED' | 'NOT_COMPLETED';

const TodoContext = createContext<
   {
      tasks: TodoList;
      toggleHandler: (id: string) => void;
      removeHandler: (id: string) => void;
      addHandler: (payload: AddTodoPayload) => void;
      filter: Filter,
      changeFilter: (filter: Filter) => void
    }
  | undefined
>(undefined);

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

const todoReducer = (state: TodoList, action: Action): TodoList => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return state.map((task) => (task.id === action.id ? { ...task, completed: !task.completed } : task));
    case 'REMOVE_TODO':
      return state.filter((task) => task.id !== action.id);
    case 'ADD_TODO':
      return [{...action.payload, id: nanoid()}, ...state];
    default:
    return state;
  }
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, dispatch] = useReducer(todoReducer, initialState);
  const [filter, setFilter] = useState<Filter>('ALL')

  const toggleHandler = (id: string) => {
    dispatch({ type: 'TOGGLE_TODO', id });
  };

  const removeHandler = (id: string) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  const addHandler = (payload: AddTodoPayload) => {
    dispatch({ type: 'ADD_TODO', payload });
  };

  const changeFilter = (filter: Filter) => {
    setFilter(filter);
  };

  return <TodoContext value={{ tasks, filter, toggleHandler, removeHandler, addHandler, changeFilter }}>{children}</TodoContext>;
};
