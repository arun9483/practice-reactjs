import { lazy } from 'react';
import './App.css';

// module = 1
const LazyTodos = lazy(() => import('./todos'));

const module = 2;
function App() {
  return (
    <>
      <h1>Home page</h1>
      {module === 1 && <LazyTodos />}
    </>
  );
}

export default App;
