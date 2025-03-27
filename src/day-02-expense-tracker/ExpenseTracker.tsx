import { nanoid } from 'nanoid';
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import ExpenseTable from './ExpenseTable';
import TotalExpenses from './TotalExpenses';
import AddExpense from './AddExpense';
import './ExpenseTracker.css';
import ExpenseCategoryFilter from './ExpenseCategoryFilter';

export interface Expense {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
}

type Action = { type: 'ADD_EXPENSE'; payload: Expense } | { type: 'REMOVE_EXPENSE'; id: string };

const initialExpenses: Expense[] = [
  { id: nanoid(), name: 'Groceries', amount: 50, category: 'Food', date: new Date('2025-03-25').toISOString() },
  { id: nanoid(), name: 'Electricity Bill', amount: 75, category: 'Utilities', date: new Date('2025-03-20').toISOString() },
  { id: nanoid(), name: 'Gym Membership', amount: 30, category: 'Health', date: new Date('2025-03-22').toISOString() },
];

const expenseReducer = (state: Expense[], action: Action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [{ ...action.payload, id: nanoid() }, ...state];
    case 'REMOVE_EXPENSE':
      console.log(`expenseReducer called with`);
      console.log(JSON.stringify(action, null, 2));
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

function getCategories(expenses: Expense[]) {
  return expenses.map((expense) => expense.category);
}

const ExpenseTracker = () => {
  const [expenses, dispatch] = useReducer(expenseReducer, initialExpenses);
  const [expenseCategory, setExpenseCategory] = useState<string>('');
  const [categories, setCategories] = useState<string[]>(['', ...getCategories(expenses)]);

  useEffect(() => {
    setCategories(['', ...getCategories(expenses)]);
  }, [expenses]);

  const filteredExpenses = expenses.filter((expense) => {
    if (!expenseCategory) return true;
    return expense.category === expenseCategory;
  });
  const totalExpenses = useMemo(() => {
    return filteredExpenses.reduce((sum, currentExpense) => {
      return sum + currentExpense.amount;
    }, 0);
  }, [filteredExpenses]);

  const removeExpenseHandler = useCallback(
    (id: string) => {
      dispatch({ type: 'REMOVE_EXPENSE', id });
    },
    [dispatch]
  );

  const addExpenseHandler = useCallback(
    (payload: Expense) => {
      dispatch({ type: 'ADD_EXPENSE', payload });
    },
    [dispatch]
  );

  const categoryChangeHandler = useCallback(
    (category: string) => {
      setExpenseCategory(category);
    },
    [setExpenseCategory]
  );

  return (
    <div className="expense-tracker">
      <ExpenseCategoryFilter categoryChangeHandler={categoryChangeHandler} categories={categories} />
      <TotalExpenses total={totalExpenses} />
      <ExpenseTable expenses={filteredExpenses} removeExpenseHandler={removeExpenseHandler} />
      <AddExpense addExpenseHandler={addExpenseHandler} />
    </div>
  );
};

export default ExpenseTracker;
