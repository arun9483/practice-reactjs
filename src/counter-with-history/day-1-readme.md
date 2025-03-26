# **Counter with History (useReducer)**

## **Problem Statement**

Create a simple yet functional counter application that keeps track of its value and maintains a history for undo/redo operations. This project serves as practice for mastering the `useReducer` hook and managing complex application state in React.

---

## **Features**

The application will include the following key features:

1. **Counter Display**:
   - A numerical display shows the current value of the counter.

2. **Controls**:
   - **Increment**: Increases the counter value by `+1`.
   - **Decrement**: Decreases the counter value by `-1`.
   - **Reset**: Resets the counter to its initial state (`0`).
   - **Undo**: Reverts the counter to its previous value.
   - **Redo**: Restores a value that was undone.

3. **State Management**:
   - `useReducer` will be used to manage the counter’s state.
   - State includes the current counter value, undo stack, and redo stack.

---

## **Detailed Functionality**

### **Increment**
- **Description**: Increases the counter by `1`.
- **State Changes**:
  - Adds the current value to the **undo stack**.
  - Clears the **redo stack**, since a new operation invalidates the redo history.
- **Example**:
  - Initial State: `value: 0, undo: [], redo: []`
  - After Increment: `value: 1, undo: [0], redo: []`

### **Decrement**
- **Description**: Decreases the counter by `1`.
- **State Changes**:
  - Adds the current value to the **undo stack**.
  - Clears the **redo stack**, since a new operation invalidates the redo history.
- **Example**:
  - Initial State: `value: 1, undo: [0], redo: []`
  - After Decrement: `value: 0, undo: [0, 1], redo: []`

### **Reset**
- **Description**: Resets the counter to its initial state (e.g., `0`).
- **State Changes**:
  - Resets the **value** to the initial state.
  - Clears both the **undo** and **redo stacks**, as history is no longer valid after reset.
- **Example**:
  - Before Reset: `value: 2, undo: [0, 1], redo: []`
  - After Reset: `value: 0, undo: [], redo: []`

### **Undo**
- **Description**: Reverts the counter to its most recent previous value stored in the **undo stack**.
- **Conditions**:
  - Can only be performed if there are values in the **undo stack**.
- **State Changes**:
  - Pops the most recent value from the **undo stack** and assigns it to `value`.
  - Pushes the current value to the **redo stack**.
- **Example**:
  - Before Undo: `value: 2, undo: [0, 1], redo: []`
  - After Undo: `value: 1, undo: [0], redo: [2]`

### **Redo**
- **Description**: Restores the last value that was undone, stored in the **redo stack**.
- **Conditions**:
  - Can only be performed if there are values in the **redo stack**.
- **State Changes**:
  - Pops the most recent value from the **redo stack** and assigns it to `value`.
  - Pushes the current value to the **undo stack**.
- **Example**:
  - Before Redo: `value: 1, undo: [0], redo: [2]`
  - After Redo: `value: 2, undo: [0, 1], redo: []`

---

## **How to Use the App**

1. **Increment/Decrement** the counter value using the respective buttons.
2. **Undo** your last action to restore a previous value.
3. **Redo** any undone action to move forward in your history.
4. Use **Reset** to clear the current state and start fresh.

---
