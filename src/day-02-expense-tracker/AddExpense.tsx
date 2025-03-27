import { FC } from 'react';
import { z } from 'zod';
import { nanoid } from 'nanoid';
import { Expense } from './ExpenseTracker';

export const ExpenseSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Name is required'), // Name must be a non-empty string
  amount: z.number().positive('Amount must be a positive number'), // Amount should be a positive number
  category: z.string().min(1, 'Category is required'), // Category must be a non-empty string
  date: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: 'Invalid date format',
  }), // Date must be a valid ISO string
});

interface AddExpenseProp {
  addExpenseHandler: (payload: Expense) => void;
}

const AddExpense: FC<AddExpenseProp> = ({ addExpenseHandler }) => {
  return (
    <div className="add-expense">
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = Object.fromEntries(new FormData(event.currentTarget));
          formData.id = nanoid();
          const expenseData = ExpenseSchema.parse({
            ...formData,
            amount: parseFloat(formData.amount as string), // Convert amount manually
            date: new Date(formData.date as string).toISOString(), // Convert date manually
          });

          event.currentTarget.reset();
          addExpenseHandler(expenseData);
        }}
        name="addExpense"
      >
        <input type="text" name="name" required />
        <input type="number" name="amount" required min={0} />
        <input type="text" name="category" required />
        <input
          type="datetime-local"
          name="date"
          defaultValue={new Date().toISOString().slice(0, 16)} // Convert to yyyy-MM-ddThh:mm
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default AddExpense;
