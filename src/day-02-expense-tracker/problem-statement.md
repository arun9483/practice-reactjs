# Expense Tracker (useReducer)

## Problem Statement

Create an expense tracker where users can:

- Add expenses (amount, category, date).
- Display total expenses.
- Filter expenses by category.
- Remove expenses.

### Requirements:

- Users can add new expenses with details like `amount`, `category`, and `date`.
- Total expenses are dynamically calculated and displayed.
- Expenses can be filtered by their category.
- Individual expenses can be removed.

---

## Features

1. **Adding Expenses**  
   Users can input expenses by providing details such as amount, category, and date.

2. **Total Expense Display**  
   The tracker calculates and displays the sum of all entered expenses.

3. **Category Filtering**  
   Expenses can be filtered by categories (e.g., Food, Utilities, Health).

4. **Removing Expenses**  
   Users can delete specific expenses from the tracker.

---

## Mock Data Example

```javascript
const initialExpenses = [
  { id: '1', name: 'Groceries', amount: 50, category: 'Food', date: '2025-03-25' },
  { id: '2', name: 'Electricity Bill', amount: 75, category: 'Utilities', date: '2025-03-20' },
  { id: '3', name: 'Gym Membership', amount: 30, category: 'Health', date: '2025-03-22' },
];
```
