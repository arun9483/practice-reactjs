import { Link } from 'react-router';

function HomePage() {
  return (
    <div style={{ textAlign: 'left' }}>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/day-01-counter">Day 01: Counter With History</Link>
        </li>
        <li>
          <Link to="/day-02-expense-tracker">Day 02: Expense Tracker</Link>
        </li>
        <li>
          <Link to="/day-03-theme-switcher">Day 03: Theme Switcher</Link>
        </li>
        <li>
          <Link to="/day-04-shopping-cart">Day 04: Shopping Cart</Link>
        </li>
        <li>
          <Link to="/day-05-notification-system">Day 05: Notification System</Link>
        </li>
        <li>
          <Link to="/day-06-tab-management">Day 06: Tab Management</Link>
        </li>
        <li>
          <Link to="/day-07-global-model-management">Day 07: Global Model Management</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
