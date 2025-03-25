export interface Todo {
  id: string, 
  text: string, 
  completed: boolean 
}

export type TodoList = Todo[];
export type AddTodoPayload = Omit<Todo, 'id'>;

