import { lazy } from 'react';
import './App.css';

// module = 1
const LazyTodos = lazy(() => import('./todos'));

// module = 2
const LazyPosts = lazy(() => import('./table-renderer/Post'));

// module = 3
const LazyCounter = lazy(() => import('./counter-with-history/counter-container'));

// module = 4
const LazyExpenseTrackerContainer = lazy(() => import('./day-02-expense-tracker/ExpenseTrackerContainer'));

// module = 5
const LazyThemeSwitcherContainer = lazy(() => import('./day-03-theme-switcher/ThemeSwitcherContainer'));

// module = 6
const LazyShoppingCartContainer = lazy(() => import('./day-04-shopping-cart/ShoppingCartContainer'));

const module = 6;
function App() {
  return (
    <>
      <h1>Home page</h1>
      {module === 1 && <LazyTodos />}
      {module === 2 && <LazyPosts />}
      {module === 3 && <LazyCounter />}
      {module === 4 && <LazyExpenseTrackerContainer />}
      {module === 5 && <LazyThemeSwitcherContainer />}
      {module === 6 && <LazyShoppingCartContainer />}
    </>
  );
}

export default App;
