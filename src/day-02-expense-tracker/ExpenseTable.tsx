import { FC } from 'react';
import { Expense } from './ExpenseTracker';
import './ExpenseTable.css';

interface ExpenseTableProp {
  expenses: Expense[];
  removeExpenseHandler: (id: string) => void;
}
const ExpenseTable: FC<ExpenseTableProp> = ({ expenses, removeExpenseHandler }) => {
  return (
    <div className="expense-table">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>amount</th>
            <th>category</th>
            <th>date</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => removeExpenseHandler(expense.id)}>remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
