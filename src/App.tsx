import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';

import './App.css';
import CommonNav from './CommonNav';
import HomePage from './HomePage';

// day:01
const LazyCounter = lazy(() => import('./counter-with-history/counter-container'));

// day:02
const LazyExpenseTrackerContainer = lazy(() => import('./day-02-expense-tracker/ExpenseTrackerContainer'));

// day:03
const LazyThemeSwitcherContainer = lazy(() => import('./day-03-theme-switcher/ThemeSwitcherContainer'));

// day:04
const LazyShoppingCartContainer = lazy(() => import('./day-04-shopping-cart/ShoppingCartContainer'));

// day:05
const LazyNotificationSystemContainer = lazy(() => import('./day-05-notification-system/NotificationSystemContainer'));

// day:06
const LazyTabManagementContainer = lazy(() => import('./day-06-tab-management'));

// day:07
const LazyGlobalModelConsumerContainer = lazy(() => import('./day-07-global-model-management'));


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/day-01-counter"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CommonNav>
                <LazyCounter />
              </CommonNav>
            </Suspense>
          }
        />
        <Route
          path="/day-02-expense-tracker"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CommonNav>
                <LazyExpenseTrackerContainer />
              </CommonNav>
            </Suspense>
          }
        />
        <Route
          path="/day-03-theme-switcher"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CommonNav>
                <LazyThemeSwitcherContainer />
              </CommonNav>
            </Suspense>
          }
        />
        <Route
          path="/day-04-shopping-cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CommonNav>
                <LazyShoppingCartContainer />
              </CommonNav>
            </Suspense>
          }
        />
        <Route
          path="/day-05-notification-system"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CommonNav>
                <LazyNotificationSystemContainer />
              </CommonNav>
            </Suspense>
          }
        />
        <Route
          path="/day-06-tab-management"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CommonNav>
                <LazyTabManagementContainer />
              </CommonNav>
            </Suspense>
          }
        />
        <Route
          path="/day-07-global-model-management"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CommonNav>
                <LazyGlobalModelConsumerContainer />
              </CommonNav>
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
