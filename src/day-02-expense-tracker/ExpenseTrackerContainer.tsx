import ExpenseTracker from './ExpenseTracker';
import './ExpenseTrackerContainer.css';

const ExpenseTrackerContainer = () => {
  return (
    <div className="expense-tracker-container">
      <h1>Expense Tracker</h1>
      <ExpenseTracker />
    </div>
  );
};

export default ExpenseTrackerContainer;
