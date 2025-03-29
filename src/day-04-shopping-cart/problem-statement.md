# Day 4: Shopping Cart (useReducer + useContext)

## Problem Statement
Build a shopping cart where users can add, remove, and update item quantities.

## Requirements
- Display list of available products.
- Users can add items to the cart.
- Cart should display:
  - Item name
  - Quantity
  - Total price
- Users can update quantity or remove items from the cart.
- Use **useReducer** to manage cart state.
- Use **useContext** to access the cart from different components.

## Mock Data Example
```javascript
const products = [
  { id: '1', name: 'Laptop', price: 1200 },
  { id: '2', name: 'Headphones', price: 150 }
];
