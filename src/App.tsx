import { lazy } from 'react';
import './App.css';

// module = 1
const LazyTodos = lazy(() => import('./todos'));

// module = 2
const LazyPosts = lazy(() => import('./table-renderer/Post'));

const module = 2;
function App() {
  return (
    <>
      <h1>Home page</h1>
      {module === 1 && <LazyTodos />}
      {module === 2 && <LazyPosts />}
    </>
  );
}

export default App;
