import TodosContainer from './Todo-Container';
import { TodoProvider } from './todo-context';

const Todos = () => {
  return (
    <TodoProvider>
      <TodosContainer />
    </TodoProvider>
  );
};

export default Todos;

