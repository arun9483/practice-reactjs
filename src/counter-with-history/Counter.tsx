import { useReducer } from 'react';

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET' } | { type: 'REDO' } | { type: 'UNDO' };

interface CounterState {
  value: number;
  redo: number[];
  undo: number[];
}
const initialState: CounterState = {
  value: 0,
  redo: [],
  undo: [],
};

const counterReducer = (previousState: CounterState, action: Action) => {
  const { value, redo, undo } = previousState;
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: value + 1,
        redo: [],
        undo: [...undo, value],
      };
    case 'DECREMENT':
      return {
        value: value - 1,
        redo: [],
        undo: [...undo, value],
      };
    case 'RESET':
      return initialState;
    case 'UNDO':
      // Revert to the most recent previous value
      if (undo.length) {
        const prevValue = undo[undo.length - 1];
        return {
          value: prevValue,
          undo: undo.slice(0, -1), // Create a new array without mutating
          redo: [...redo, value],
        };
      }
      return previousState;
    case 'REDO':
      // Restores the value that was undone
      if (redo.length) {
        const nextValue = redo[redo.length - 1];
        return {
          value: nextValue,
          undo: [...undo, value],
          redo: redo.slice(0, -1), // Create a new array without mutating
        };
      }
      return previousState;
    default:
      return previousState;
  }
};

import './Counter.css';

const Counter = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);
  const { value, redo, undo } = counterState;
  return (
    <div className="counter">
      <div className="actions">
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
        <span>{value}</span>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
      </div>
      <div className="actions">
        <button disabled={undo.length === 0} onClick={() => dispatch({ type: 'UNDO' })}>
          undo
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
        <button disabled={redo.length === 0} onClick={() => dispatch({ type: 'REDO' })}>
          redo
        </button>
      </div>
    </div>
  );
};
export default Counter;
